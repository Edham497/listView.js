const {app, BrowserWindow} = require('electron')
let mainwin = {
    frame: null,
    url: `${__dirname}/app/index.html`
}

function createWindow(win){
    win.frame = new BrowserWindow({
        frame: false,
        transparent: true,
        backgroundColor: '#00000000'
    })

    win.frame.loadURL(win.url)

    win.frame.on('close', app.quit)
}

app.on('ready', ()=>{
    createWindow(mainwin)
})