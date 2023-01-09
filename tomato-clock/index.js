const { app, BrowserWindow, dialog, ipcMain, Tray, Menu } = require('electron')
const path = require('path')
const createTray = require('./tray')

const createWindow = () => {
  const win = new BrowserWindow({
    height: 200,
    width: 300,
    webPreferences: {
      preload: path.join(__dirname, 'render/preload.js')
    },
    // 设置不显示在任务栏（直接托盘）
    // skipTaskbar: true
  })


  win.loadFile('./main.html')

  const wc = win.webContents
  // wc.openDevTools()
  createTray(app, win)

  Menu.setApplicationMenu(null)

}

ipcMain.handle('msg-event', (event, msg) => {
  if (msg === 'end') {
    dialog.showMessageBox({
      title: 'Message',
      message: '倒计时结束'
    })
  }
})


app.whenReady().then(() => {
  createWindow()
})