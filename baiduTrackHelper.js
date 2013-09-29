/*
Apache License
author: Tony Mao [huiliumao@gmail.com]
*/
try{
	jQuery.noConflict();
}catch(e){
	alert('No jQuery found!');
}
var _hmt = _hmt || [];
if(typeof _BTA != 'undefined' && _BTA != ''){
	_hmt.push(['_setAccount', _BTA]);
	var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
	document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F" + _BTA + "' type='text/javascript'%3E%3C/script%3E"));
	(function($){
		$(function(){
			$('a.baiduTrack').click(function(e){
				e.preventDefault();
				var baiduTrack = $(this).attr('data-baiduTrack');
				if (baiduTrack){
					_hmt.push(eval(baiduTrack));
				}
				var rel = $(this).attr('rel');
				if (rel == 'new'){
					window.open($(this).attr('href'));
				}else{
					window.location.href = $(this).attr('href');
				}
			});
		});
	})(jQuery);
}else{
	alert('Must set the _BTA variable first!');
}

