const electron = require( 'electron' )
const FS = require( 'fs' )
const PATH = require( 'path' )
const URL = require( 'url' )

const { app, BrowserWindow } = electron

let mainWindow
let webContent
const indexHtmlPath = PATH.resolve( __dirname, '../../client/public/index.html' )

function createWindow() {
    mainWindow = new electron.BrowserWindow( {
        autoHideMenuBar: true
    } )   

    webContent = mainWindow.webContents

    mainWindow.loadURL( URL.format( {
        pathname: indexHtmlPath,
        protocol: 'file:',
        slashes: true
    } ) )

    mainWindow.on( 'closed', () => {
        mainWindow = null
    } )
}




app.on( 'ready', createWindow )

app.on( 'window-all-closed', () => {
    if ( process.platform !== 'darwin' ) {
        app.quit()
    }
} )


app.on( 'activate', createWindow )