
//特权函数  是不是闭包？
//私有函数的公有化
var MYAPP = {};
MYAPP.dom = (function(){
	var _setStyle = function(el,prop,value){
		console.log('setStyle');
	};
	var _getStyle = function(el,prop){
		console.log('getStyle');
	};
	return {
		setStyle:_setStyle,
		getStyle:_getStyle,
		yetAnother:_setStyle
	};
})

MYAPP.dom.setStyle() = MYAPP.dom.yetAnother();

MYAPP.dom.setStyle = function(){alert('b');};//指向新的方法
MYAPP.dom.setStyle() != MYAPP.dom.yetAnother();//还是指向_setStyle()