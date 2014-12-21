var fs = require('fs');
var rs = fs.createReadStream('../Buffer/buffer.js');

// 数据流读入次数
var flag = 0;

/**
 *	数据流读入，打印次数测试。 次数根据文件大小而定
 */
rs.on('data', function (chunk) {
	console.log(++flag);
});
 
/**
 *	结束标记
 */
rs.on('end', function () {
	console.log('end');
});
