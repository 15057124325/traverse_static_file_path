const fs = require('fs');
const path = require('path');

//获取当前目录的绝对路径
const filePath = path.resolve();

//读取文件目录
const file = (filePath) => {
    fs.readdir(filePath, (err, files) => {
        if(err) {
            console.log(err);
            return;
        }else {
            let count = files.length;
            let results = {};
            files.forEach((filename) => {
                fs.stat(path.join(filePath, filename), (err, stats) => {
                    if(err) throw err;
                    if(stats.isFile()) {
                        console.log(path.join(filePath, filename));
                        // if(getdir(filename) == 'js'){
                        //     fs.readFile(filename, (err, data) => {
                        //         console.log(data);
                        //         console.log(data.toString());
                        //         console.log(data.indexOf("console.log"));
                                   
                        //     })
                        // }
                    }else if(stats.isDirectory()) {
                        file(path.join(filePath, filename));
                    }
                })
            })
        }
    })
}
//获取后缀名
const getdir = (url) =>{
    var arr = url.split('.');
    var len = arr.length;
    return arr[len-1];
}
file(filePath);