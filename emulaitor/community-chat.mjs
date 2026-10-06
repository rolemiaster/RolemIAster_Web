import {CommunityChatFeed} from './community-chat-feed.mjs';
// El interruptor se comparte con Android, pero no reutiliza ajustes comerciales.
export function isChatEnabled(config) {
    return config === null || typeof config !== 'object' || Array.isArray(config)
        || typeof config.community_chat_enabled !== 'boolean' || config.community_chat_enabled;
}

export async function readChatConfiguration(response) {
    const reader = response.body?.getReader();
    if (!reader) throw new Error('Lectura acotada no disponible');
    const decoder = new TextDecoder('utf-8', {fatal:true});
    let total = 0, text = '', finished = false;
    try {
        while (true) {
            const {done, value} = await reader.read();
            if (done) {finished = true; break;}
            total += value.byteLength;
            if (total > 16384) throw new Error('Configuración demasiado grande');
            text += decoder.decode(value, {stream:true});
        }
        return JSON.parse(text + decoder.decode());
    } finally {
        if (!finished) void reader.cancel().catch(() => {});
        reader.releaseLock();
    }
}

export class CommunityChatController {
    #generation = 0;
    #opened = false;
    constructor({readConfig, openChat, closeChat, onState}) {
        Object.assign(this, {readConfig, openChat, closeChat, onState});
    }
    async refresh() {
        const generation = ++this.#generation;
        let enabled = true;
        // Fallar al leer configuración no equivale a que falle el proveedor o el renderer.
        try { enabled = isChatEnabled(await this.readConfig()); } catch { /* Respaldo activo. */ }
        if (generation !== this.#generation) return;
        try {
            if (enabled && !this.#opened) { this.openChat(); this.#opened = true; }
            if (!enabled) { this.closeChat(); this.#opened = false; }
            this.onState(enabled ? 'enabled' : 'disabled');
        } catch {
            this.closeChat(); this.#opened = false; this.onState('error');
        }
    }
    stop() {
        ++this.#generation;
        this.closeChat(); this.#opened = false;
    }
}

function startPage() {
    const frameHost = document.getElementById('chat-frame');
    const status = document.getElementById('chat-status');
    const retry = document.getElementById('chat-retry');
    let pending;
    const feedMode = new URLSearchParams(location.search).get('mode') === 'feed';
    const nativeLifecycle = new URLSearchParams(location.search).get('native') === '1';
    if (nativeLifecycle) document.body.dataset.native = 'true';
    const instance = Array.from(crypto.getRandomValues(new Uint8Array(16)), x => x.toString(16).padStart(2, '0')).join('');
    const feed = new CommunityChatFeed({instance, source:() => frameHost.querySelector('iframe')?.contentWindow});
    let currentState = 'checking';
    if (feedMode) document.body.dataset.mode = 'feed';
    // API propia de solo lectura. Android no expone ningún objeto nativo al iframe.
    window.emulaitorChatSnapshot = () => currentState === 'checking' ? null : ({enabled:currentState === 'enabled', messages:feed.snapshot()});
    let frameReady = false;
    const receive = event => {
        if (!frameReady && event.origin === 'https://e.widgetbot.io' && event.source &&
            event.source === frameHost.querySelector('iframe')?.contentWindow &&
            typeof event.data === 'string' && event.data.length <= 65536) {
            try {
                const packet = JSON.parse(event.data);
                if (packet?.widgetbot === true && packet.id === instance && packet.event === 'ready' && packet.data === true) frameReady = true;
            } catch { /* Un mensaje inválido no habilita comandos. */ }
        }
        return feed.receive(event);
    };
    // Acceso por mando a la misma identificación del proveedor; sin crear otra sesión.
    window.emulaitorChatLogin = () => {
        if (!nativeLifecycle || !frameReady || document.body.dataset.mode === 'feed' || currentState !== 'enabled') return false;
        const frame = frameHost.querySelector('iframe');
        if (!frame?.contentWindow) return false;
        frame.contentWindow.postMessage(JSON.stringify({widgetbot:true, id:instance, event:'login'}), 'https://e.widgetbot.io');
        return true;
    };

    const messages = {
        enabled: '', disabled: 'El chat comunitario está desactivado en este momento.',
        error: 'No se ha podido comprobar la disponibilidad del chat. Puedes reintentarlo.',
    };
    const controller = new CommunityChatController({
        readConfig: async () => {
            pending?.abort();
            const request = new AbortController(); pending = request;
            const timeout = setTimeout(() => request.abort(), 8000);
            try {
                const response = await fetch('./config.json', {cache:'no-store', credentials:'omit', signal:request.signal});
                if (!response.ok) throw new Error('Configuración no disponible');
                return await readChatConfiguration(response);
            } finally {clearTimeout(timeout); if (pending === request) pending = undefined;}
        },
        openChat: () => {
            frameReady = false;
            const frame = document.createElement('iframe');
            frame.title = 'Chat comunitario de EmulAItor';
            const endpoint = 'https://e.widgetbot.io/channels/1470216161223508123/1509161917430763601';
            frame.src = `${endpoint}/?api=${encodeURIComponent(instance)}&emitLatestMessage=1`;
            window.addEventListener('message', receive);

            frame.referrerPolicy = 'no-referrer';
            frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox');
            frameHost.replaceChildren(frame);
        },
        closeChat: () => {
            frameReady = false;
            window.removeEventListener('message', receive); feed.clear(); frameHost.replaceChildren();
        },
        onState: state => {
            currentState = state;
            status.textContent = messages[state]; status.hidden = state === 'enabled';
            retry.hidden = state === 'enabled'; frameHost.hidden = state !== 'enabled';
        },
    });
    let timer;
    function stop() {currentState = 'disabled'; clearInterval(timer); timer = undefined; controller.stop(); pending?.abort();}
    function resume() {
        if (!nativeLifecycle && document.hidden) {stop(); return;}
        // Una reaparición de la misma vista no reinicia la cuenta ni borra mensajes.
        if (timer !== undefined) return;
        void controller.refresh(); timer = setInterval(() => void controller.refresh(), 60000);
    }
    retry.addEventListener('click', () => {if (nativeLifecycle || !document.hidden) void controller.refresh();});
    document.addEventListener('visibilitychange', resume);
    window.addEventListener('pagehide', stop);
    window.addEventListener('pageshow', resume);
    resume();
}
if (typeof document !== 'undefined') startPage();
