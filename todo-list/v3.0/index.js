const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 450,
    height: 800
  })

  // win.loadURL('https://www.zhihu.com/hot')
  win.loadFile('./index.html')
}
app.whenReady().then(createWindow)