import config from './config.js';

export function filterText(text) {
    if (!config.TagRemoval) {
        return text;
    }
    const pruneRe = /&lt;prune&gt;[\s\S]*?&lt;\/prune&gt;/g;
    const summaryRe = /&lt;summary&gt;[\s\S]*?&lt;\/summary&gt;/g;
    const chatRe = /&lt;\/?CHAT&gt;/g;
    const modRe = /&lt;\/?mod&gt;/g;
    const threadRe = /&lt;\/?thread&gt;/g;

    
    return text.replace(pruneRe, '').replace(summaryRe, '').replace(chatRe, '').replace(modRe, '').replace(threadRe, '')
        .replace(/Assistant:/g, '')
        .replace(/Human:/g, '')
        .replace(/A:/g, '')
        .replace(/H:/g, '');
}
