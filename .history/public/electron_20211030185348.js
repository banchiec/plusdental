const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({ width: 900, height: 680 })
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
    )

}