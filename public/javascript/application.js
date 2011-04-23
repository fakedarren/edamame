



Element.implement({

	makeWindowTabbed: function(){
		var tabs = this.getElement('.tabs').getElements('li');
		var content = this.getElements('article');
		tabs.each(function(tab, index){
			tab.addEvent('click', function(){
				tabs.removeClass('current');
				content.removeClass('current');
				tabs[index].addClass('current');
				content[index].addClass('current');
			});
		});
	}

});




(function($){
	
	var initUI = function(context){
		context.getElements('.tabbed.cms-window').makeWindowTabbed();
	};
	initUI(document.body);
	
	$$('#cms-header LI A').addEvent('click', function(evt){
		if (evt) evt.stop();
		new Request({
			url: this.get('href'),
			method: 'get',
			onSuccess: function(response){
				$('cms-body').empty();
				$('cms-body').set('html', response);
				initUI($('cms-body'));
			}
		}).send();
	});
	
	$$('#cms-header LI A')[3].fireEvent('click');
	
})(document.id);