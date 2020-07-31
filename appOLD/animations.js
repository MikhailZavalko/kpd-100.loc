;(function($, undefined) {
	
	/***/
	var objs = {
	'.title-page .blocklist-18 .item-outer' : 'zoomIn d1',	
	'.title-page .blocklist-21 .item' : 'zoomIn d1',	
	'.title-page .blocklist-23 .item-outer' : 'zoomIn d1',	
	'.title-page .blocklist-26 .item-outer' : 'zoomIn d1',	
	'.title-page .editable_block-28 .image img' : 'fadeInLeft d1',	
	'.title-page .block-14' : 'fadeInRight d1',	
	};
	/***/
	
	
	$(function() {
		for (var i in objs) {
			$(i).attr('data-s3-animator', objs[i]);
		}
	})
	var url = '/g/s3/misc/animator/1.0.0/css/s3.animator.scss.css';
	$.get(url, function(){
                    $('<link>', {rel:'stylesheet', type:'text/css', 'href':url}).appendTo('head');
                    if (!window.s3Animator) {
					$.getScript('/g/s3/misc/animator/1.1.0/js/s3.animator.js').done(function() {
						window.s3Animator.once = true;
					});
	}
    });
})(jQuery)