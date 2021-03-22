module.exports = {
  isDev() {
    return process.defaultApp
        || /[\\/]electron-prebuilt[\\/]/.test(process.execPath)
        || /[\\/]electron[\\/]/.test(process.execPath);
  }
}