const { contextBridge, ipcRenderer } = require('electron')


const handleSend = (tag) => {
  ipcRenderer.invoke('msg-event', tag)
}

contextBridge.exposeInMainWorld('myapi', {
  platform: process.platform,
  handleSend
})