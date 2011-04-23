



Element.implement({

	makeWindowTabbed: function(){
		var tabs = this.getElement('ul').getElements('li');
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
	
	$$('.tabbed.cms-window').makeWindowTabbed();
	
})(document.id);