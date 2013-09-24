try{
	jQuery.noConflict();
}catch(e){
	alert('No jQuery found!');
}
var _hmt = _hmt || [];
if(typeof _BTA != 'undefined' && _BTA != ''){
	var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
	document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F" + _BTA + "' type='text/javascript'%3E%3C/script%3E"));
	// (function($){
	// })(jQuery);
}else{
	alert('Must set the _BTA variable first!');
}

