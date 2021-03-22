const { ipcMain, Notification } = require("electron");
const {exec, spawn} = require('child_process')

ipcMain.on('openVscode', (e, path)=> {
  console.log('process.env.path: ', process.env.path, path);
  exec('/Applications/Visual\\ Studio\\ Code.app/Contents/Resources/app/bin/code .', {
    encoding: 'utf8',
    cwd: path,
    shell: true
    // cwd: '/Users/xiaoxinwu/code/localservice',
  },(error, res)=> {
    console.log(error, res)
    let notice = new Notification({
      body: `error: ${String(error)}`
    })
    // let notice2 = new Notification({
    //   body: `res: ${String(res)}`
    // })
    // let notice3 = new Notification({
    //   body: `path: ${String(path)}`
    // })
    if (!!error) {
      notice.show()
    }
    // setTimeout(()=> {
    //   notice2.show()
    // }, 2000)
    // setTimeout(()=> {
    //   notice3.show()
    // }, 3000)
  })
})