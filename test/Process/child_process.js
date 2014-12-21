var child_process = require('child_process');
var util = require('util');
 
var script = 'open .';

child_process.exec(
    util.format(script), function(err){
    	if (err) {
    		console.log(script + '执行失败'); 
    		return;
    	};

    console.log(script + '执行成功'); 
});
