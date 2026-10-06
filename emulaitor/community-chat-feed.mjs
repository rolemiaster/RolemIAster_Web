// Adaptador mínimo del contrato público de @widgetbot/embed-api 1.2.18.
// No importa librerías ni accede al DOM del iframe. Solo conserva texto de lounge.
const CHANNEL = '1509161917430763601';
const clean = (value, limit) => typeof value === 'string'
    ? value.replace(/[\u0000-\u001f\u007f\u202a-\u202e\u2066-\u2069]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, limit) : '';
export class CommunityChatFeed {
    #messages = [];
    constructor({source, instance}) { this.source = source; this.instance = instance; }
    receive(event) {
        if (event.origin !== 'https://e.widgetbot.io' || !event.source || event.source !== this.source()
            || typeof event.data !== 'string' || event.data.length > 65536) return false;
        let packet;
        try {packet = JSON.parse(event.data);} catch {return false;}
        if (packet?.widgetbot !== true || packet.id !== this.instance || (packet.data?.channel?.id ?? packet.data?.message?.channelId) !== CHANNEL) return false;
        const data = packet.data;
        if (packet.event === 'messageDelete' || packet.event === 'messageDeleteBulk') {
            const ids = packet.event === 'messageDelete' ? [data.id] : Array.isArray(data.ids) ? data.ids : [];
            this.#messages = this.#messages.filter(m => !ids.includes(m.id)); return true;
        }
        if (packet.event !== 'message' && packet.event !== 'latestMessage' && packet.event !== 'messageUpdate') return false;
        const message = data.message;
        if (!message || typeof message.id !== 'string' || !/^\d{1,22}$/.test(message.id)
            || (message.channelId !== undefined && message.channelId !== CHANNEL)) return false;
        const prior = this.#messages.findIndex(m => m.id === message.id);
        if (packet.event === 'messageUpdate' && prior < 0) return false;
        if (typeof message.content !== 'string') return false;
        const text = clean(message.content, 180);
        if (!text) { this.#messages = this.#messages.filter(m => m.id !== message.id); return true; }
        const author = clean(message.author?.username, 32) || (prior >= 0 ? this.#messages[prior].author : 'Usuario');
        const entry = {id:message.id, author, text};
        if (prior >= 0) this.#messages[prior] = entry;
        else this.#messages = [...this.#messages, entry].slice(-3);
        return true;
    }
    snapshot() { return this.#messages.map(m => ({...m})); }
    clear() { this.#messages = []; }
}
