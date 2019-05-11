// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow () : void {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	})

	mainWindow.loadFile('index.html')

	mainWindow.on('closed', function () {
		mainWindow = null
	});
}

app.on('ready', createWindow)

app.on('window-all-closed', function () : void{
	if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function ():void{
	if (mainWindow === null) createWindow()
});

