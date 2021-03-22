const { app, BrowserWindow } = require('electron')
const {create: createMainWindow} = require('./window/main')

app.whenReady().then(() => {
  createMainWindow()
  require('./ipc')
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})