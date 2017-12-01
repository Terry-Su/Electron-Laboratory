const { app, BrowserWindow } = require( 'electron' )
const PATH = require( 'path' )
const URL = require( 'url' )


let win

function createWindow() {
    win = new BrowserWindow( { width: 800, height: 600 } )

    win.loadURL( URL.format( {
       pathname: PATH.join( __dirname, 'index.html' ), 
       protocol: 'file:',
       slashes: true
    } ) )

    // open the DevTools
    win.webContents.openDevTools()


    // emitted when window closed
    win.on( 'closed', () => {
        win = null
    } )
}


app.on( 'ready', createWindow )

app.on( 'window-all-closed', () => {
    if ( process.platform !== 'darwin' ) {
        app.quit()
    }
} )

app.on( 'activate', () => {
    if ( win === null ) {
        createWindow()
    }
} )



