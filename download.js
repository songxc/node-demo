var Path = require('path');
var Download = require('download');

// 下载路径
var destDir = Path.join(__dirname, './download');

// 下载图片
new Download({mode: '755'})
  .get('http://songxc.github.io/images/thumbnail-2.png', destDir)
  .run(function(err, files) {
    if (err) {
      throw err;
    }
    console.log(files);
  });