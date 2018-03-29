const prerender = require('prerender');
const memoryCache = require('prerender-memory-cache');

const server = prerender({
    chromeFlags: [
        '--no-sandbox', '--headless', '--disable-gpu', 
        '--remote-debugging-port=9222', '--hide-scrollbars'],
});

server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
server.use(prerender.whitelist());
server.use(prerender.blockResources());
server.use(memoryCache);

server.start();