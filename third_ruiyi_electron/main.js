// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 470,
    title: "睿易云 Steven",
    fullscreenable: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  mainWindow.on("close", (e) => {
    if (global.ruiyi != undefined) {
      global.ruiyi.close();
      global.ruiyi = undefined;
    }
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("ruiyi", (event, args) => {
  if (global.ruiyi != undefined) global.ruiyi.close();
  global.ruiyi = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 470,
    title: "成绩查询",
    fullscreenable: true,
  });
  let json_args = JSON.parse(args);
  let guid = json_args.guid;
  let gradeGuid = json_args.gradeGuid;
  let name = json_args.name;
  let data = {
    userId: guid,
    userType: 0,
    token: null,
    realName: name,
    schoolId: "C44FD4A062114962A7E0A64F6E283D63",
    schoolName: "北京北大附中",
    showAllelicScore: "02",
    sysIsRank: "1",
    teacherViewGradeAnalysis: "0",
    isHaveStuFineAnswer: "1",
    isHaveStuAppreciate: "1",
    schoolPersonal: "00",
    isFirst: 1,
    roleList: [
      {
        roleId: "00",
        roleName: "学生",
        grades: [
          {
            gradeId: gradeGuid,
            gradeName: "高2022届",
            subjects: null,
            courses: null,
            classes: null,
          },
        ],
      },
    ],
    showGradeAvg: "0",
    showClassAvg: "0",
    showGradeMax: "0",
    showClassMax: "0",
    showGradeMin: "0",
    showClassMin: "0",
    showClassInCount: "0",
    showClassMissCount: "0",
    showTxt: "0",
    isShowNoExamPage: "0",
    userid: guid,
    schoolid: "C44FD4A062114962A7E0A64F6E283D63",
    uguid: guid,
    isryt: 0,
    theme: 2,
    isFromExam: true,
  };
  let stringify_data = JSON.stringify(data);
  global.ruiyi.loadURL(
    "https://bdfzres.lexuewang.cn:8008/analyse/web/index.html#/login"
  );
  global.ruiyi.webContents.on("did-finish-load", function () {
    global.ruiyi.webContents.executeJavaScript(
      'window.localStorage.setItem("obj",\'' + stringify_data + "');"
    );
    global.ruiyi.webContents.executeJavaScript(
      'window.location.href="https://bdfzres.lexuewang.cn:8008/analyse/web/index.html#/examList";'
    );
  });
  global.ruiyi.on("close", (e) => {
    global.ruiyi = undefined;
  });
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
