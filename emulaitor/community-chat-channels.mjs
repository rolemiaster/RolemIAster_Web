// Directorio público: navegación y presentación, nunca autorización de mensajes.
export const CHAT_SERVER = '1470216161223508123';
export const LEGACY_CHANNEL = '1509161917430763601';
const legacy = {id:LEGACY_CHANNEL, name:'General (English)', language:'en', flag:'🇺🇸', type:'lounge', discord_only:false};
export function readChannels(config) {
    if (!config || typeof config !== 'object' || Array.isArray(config)) return [];
    if (!Object.hasOwn(config, 'community_chat_channels')) return [{...legacy}];
    const list = config.community_chat_channels;
    if (!Array.isArray(list) || list.length > 32) return [];
    const seen = new Set(), rooms = [];
    for (const value of list) {
        if (!value || typeof value !== 'object' || Array.isArray(value)) continue;
        if (Object.hasOwn(value,'enabled') && value.enabled !== true) continue;
        const {id, name, type} = value;
        const language = typeof value.language === 'string' ? value.language.toLowerCase() : '';
        const flag = typeof value.flag === 'string' ? value.flag : '';
        if (typeof id !== 'string' || !/^[0-9]{17,22}$/.test(id) || seen.has(id) ||
            typeof name !== 'string' || !name.trim() || name.trim().length > 80 || /[\u0000-\u001f\u007f-\u009f]/.test(name) ||
            flag.length > 8 || /[\u0000-\u001f\u007f-\u009f]/.test(flag) ||
            (type === 'lounge' && !/^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/.test(language))) continue;
        seen.add(id);
        rooms.push({id,name:name.trim(),language,flag,type:type === 'lounge' ? 'lounge' : 'community',discord_only:value.discord_only === true});
    }
    return rooms;
}
export function initialChannel(rooms, preferred, language = '') {
    const lounges = rooms.filter(room => room.type === 'lounge');
    const primary = language.toLowerCase().replace('_','-').split('-')[0];
    return lounges.find(room => room.id === preferred)
        ?? lounges.find(room => room.language.split('-')[0] === primary)
        ?? lounges.find(room => room.language.split('-')[0] === 'en')
        ?? lounges[0]
        ?? rooms[0];
}
