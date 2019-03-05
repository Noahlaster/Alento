const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({ width: 800, height: 600, show: false, icon: __dirname + "/img/icone.png"})

  // and load the index.html of the app.
  win.loadFile('index.html')
  
  //função responsavél por abrir a aplicação sem a tela branca.
  win.once("ready-to-show",()=>{
    win.show();
  })

}

app.on('ready', createWindow)