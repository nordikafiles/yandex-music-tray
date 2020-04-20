const { app, globalShortcut } = require('electron')
const { menubar } = require('menubar')
const path = require('path')

const mb = menubar({
  icon: path.join(__dirname, 'assets/menubar.png'),
  browserWindow: {
    width: 1000,
    height: 700,
    webPreferences: {
      webviewTag: true 
    }
  }
})