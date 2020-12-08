const { app, BrowserWindow, Menu } = require("electron");

//Set env
process.env.NODE_ENV = "development";

const isDev = process.env.NODE_ENV !== "production" ? true : false;
console.log(process.platform);

let mainWindow;

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "ImgShrink",
    width: 500,
    height: 600,

    icon: "./assets/icons/Icon_256x256.png",
    resizable: isDev,
  });

  mainWindow.loadFile("./app/index.html");
}

app.on("ready", () => {
  createMainWindow();

  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  mainWindow.on("ready", () => (mainWindow = null));
});

const menu = [
  {
    label: "file",
    submenu: [
      {
        label: "Quit",
      },
    ],
  },
];
