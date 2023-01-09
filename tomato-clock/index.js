const { app, BrowserWindow, dialog } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    height: 500,
    width: 600,
  })
  win.loadFile('./main.html')

  const wc = win.webContents
  wc.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})