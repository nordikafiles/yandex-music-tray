const { app, globalShortcut } = require('electron')
const { menubar } = require('menubar')

const mb = menubar({
  browserWindow: {
    width: 1000,
    height: 700,
    webPreferences: {
      webviewTag: true 
    }
  }
})