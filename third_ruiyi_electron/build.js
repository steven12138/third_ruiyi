var electronInstaller = require('electron-winstaller');
var path = require("path");

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: path.join('./'), //刚才生成打包文件的路径
    outputDirectory: path.join('./build/installer64'), //输出路径
    authors: 'steven12138', // 作者名称
    exe: 'third_ruiyi.exe', 
    noMsi: true, 
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));