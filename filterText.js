//Tags and text to be filtered go here. 
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
    const humanRe = /&lt;\/?human&gt;/g;
    const respondRe = /\[You respond here\]/g;

    
    return text.replace(pruneRe, '').replace(summaryRe, '').replace(chatRe, '').replace(modRe, '').replace(threadRe, '').replace(humanRe, '').replace(respondRe, '')
        .replace(/Assistant:/g, '')
        .replace(/Human:/g, '')
        .replace(/A:/g, '')
        .replace(/H:/g, '');
}
