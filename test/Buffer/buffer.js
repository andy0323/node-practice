/**
 *	字符串转为buffer数组，测试结果：默认为`utf-8`
 */
var str = 'andy';

log(new Buffer(str));
log(new Buffer(str, 'utf-8'));


/**
 *	buffer数组转为字符串, 测试结果：默认为`utf-8`
 */
var bin = new Buffer(str);

log(bin.toString());
log(bin.toString('utf-8'));

/**
 *	打印第一个元素的16进制
 */
log(bin[0].toString(16));


/**
 *	每一个数组元素代表一个字符, 这是对二进制数据块的简单处理
 */
var sub = bin.slice(1)
log(sub);
log(sub.toString());

/**
 *	复制数据库
 */
var tmp = new Buffer(bin.length);
bin.copy(tmp);

log(bin);
log(tmp);

/**
 *	打印
 */
function log(str) {
	console.log(str);
}
