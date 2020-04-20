const { app, globalShortcut, ipcMain } = require('electron')
const { menubar } = require('menubar')
const path = require('path')

const mb = menubar({
  icon: path.join(__dirname, 'assets/menubar.png'),
  browserWindow: {
    width: 1000,
    height: 700,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true
    }
  }
})

const KEYS = ['MediaPreviousTrack', 'MediaNextTrack', 'MediaPlayPause', 'Cmd+Shift+Option+4', 'Cmd+Shift+Option+5', 'Cmd+Shift+Option+6', 'Cmd+Shift+Option+7']

app.on('ready', () => {
  KEYS.map(x => globalShortcut.register(x, () => {
    if (x == 'Cmd+Shift+Option+4') return mb.window.openDevTools()
    mb.window.webContents.send('hotkey', x)
  }))
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})