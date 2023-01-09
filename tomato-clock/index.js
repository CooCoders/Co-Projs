const { app, BrowserWindow, Notification, dialog, ipcMain, Tray, Menu } = require('electron')
const path = require('path')
const createTray = require('./tray')

const createWindow = () => {
  const win = new BrowserWindow({
    height: 180,
    width: 300,
    webPreferences: {
      preload: path.join(__dirname, 'render/preload.js')
    },
    // 设置不显示在任务栏（直接托盘）
    skipTaskbar: true
  })


  win.loadFile('./main.html')

  const wc = win.webContents
  // wc.openDevTools()
  createTray(app, win)

  Menu.setApplicationMenu(null)

}

ipcMain.handle('msg-event', (event, msg) => {
  if (msg === 'end') {
    // dialog.showErrorBox({
    //   type: info,
    //   title: 'Message',
    //   message: '倒计时结束'
    // })
    new Notification({
      title: 'From CoCoder',
      silent: true,
      body: 'O泡时间到!!',
      icon: path.join(__dirname, 'resource/info.png')
    }).show()
  }
})

if (process.platform === 'win32') {
  app.setAppUserModelId(app.name);
}

app.whenReady().then(() => {
  createWindow()
})