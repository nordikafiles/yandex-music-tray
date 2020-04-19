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

mb.on('ready', () => {
  console.log('app is ready')
  // your app code here
})

// app.on('ready', () => {
//   // Register a 'CommandOrControl+X' shortcut listener.
//   const ret = globalShortcut.register('MediaPlayPause', () => {
//     console.log('MediaPlayPause is pressed')
//   })

//   if (!ret) {
//     console.log('registration failed')
//   }

//   // Check whether a shortcut is registered.
//   console.log(globalShortcut.isRegistered('MediaPlayPause'))
// })

// app.on('will-quit', () => {
//   // Unregister a shortcut.
//   globalShortcut.unregister('MediaPlayPause')

//   // Unregister all shortcuts.
//   globalShortcut.unregisterAll()
// })