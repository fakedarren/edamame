



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
	
	var mainNav = $$('#cms-header LI A');
	mainNav.addEvent('click', function(evt){
		if (evt) evt.stop();
		mainNav.removeClass('current');
		this.addClass('current');
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
	
})(document.id);