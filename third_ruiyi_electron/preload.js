// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const ipc = require('electron').ipcRenderer

window.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('Open_ruiyi', (event) => {
        ipc.send('ruiyi', JSON.stringify({
            guid: event.detail.guid,
            gradeGuid: event.detail.gradeGuid,
            name: event.detail.name,
        }));
    })
})