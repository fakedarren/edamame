if(!CMS)
	var CMS = {};

CMS.TextEditor = new Class({

	version: "0.0000001",
	
	Implements: [Options, Events],
	options: {},
	
	initialize: function(textarea, options)	{
		this.textarea = textarea;
		this.setOptions(options);
		
		var self = this;
		this.frame = new IFrame({
			src: this.options.canvas,
			frameborder: 0,
			events: {
				load: function()	{
					self.textarea.setStyle('display', 'none');
					self.setupIframe();
					self.bindEventListeners();
					self.toggle().toggle();
					self.setUpToolbar();
				}
			}
		}).inject(this.textarea, 'after');
		this.textarea.getParent('form').addEvent('submit', function(){
			self.fireEvent('submit', self);
		});
	},
	
	setUpToolbar: function(){
		
		var self = this;
		this.toolbar = this.textarea.getPrevious('.toolbar');
		
		if (this.toolbar){
			this.toolbar.getElements('.button').each(function(button){
				button.get('class').split(" ").each(function(func){
					if(CMS.TextEditor.Buttons[func]){
						button.addEvent('mousedown', function(evt){
							CMS.TextEditor.Buttons[func](evt, self);					  
						});
					}
				});
			});
		} else {
			this.toolbar = false;
		}
	},
			
	setupIframe: function()	{
		this.win = this.frame.contentWindow || this.frame;
		this.doc = this.win.document;
		this.framebody = this.doc.body;
		this.framebody.innerHTML = this.textarea.get('value');
		(Browser.ie) ? 
			this.doc.body.contentEditable = true: 
			this.doc.designMode = 'On';
	},
	
	bindEventListeners: function()	{
		this.doc.addEventListener ?
			this.doc.addEventListener('keypress', this.listener.bind(this), true):
			this.doc.attachEvent('onkeypress', this.listener.bind(this));
		this.textarea.addEvent('keypress', this.listener.bind(this));
	},
	
	listener: function(evt)	{
		if(!evt.control)	return;
		if(evt.key == 'enter')	{
			evt.stop();
			this.action(0, '<br />\n');
		}
	},
	
	toggle: function()	{
		this.wysiwygview = !!this.textarea.offsetHeight * 1;
		try	{
			(this.wysiwygview) ?
				this.framebody.innerHTML = this.textarea.value :
				this.textarea.value = this.doc.body.innerHTML;
		}	catch(e)	{}
		var el = ['textarea', 'frame'];
		this[el[this.wysiwygview]].setStyle('display', '');
		this[el[!this.wysiwygview * 1]].setStyle('display', 'none');
		if(this.wysiwygview)	{
			(Browser.ie) ? 
				this.doc.body.contentEditable = true: 
				this.doc.designMode = 'On';
		}
		this.fireEvent('switchView');
		this.focus();
		return this;
	},
	
	action: function(cmd, html)	{
		if (typeOf(cmd) != 'array')	cmd = [cmd];
		if (this.wysiwygview)	{
			this.doc.execCommand(cmd[0], false, cmd[1]); 
		} else if (html)	{
			this.insertIntoTextarea(html);	
		}
		this.focus();
	},
	
	applyToSelection: function(html, selection)	{
		return html.replace('$', (selection || '')).replace(/#/g, '\n');
	},
	
	insertIntoTextarea: function(html)	{
		if(!this.wysiwygview)	{
			if(document.selection)	{
				this.focus();
				document.selection.createRange().text = this.applyToSelection(html, document.selection.createRange().text);
				this.focus();
			}
			else	{
				var start = this.textarea.selectionStart;
				var end = this.textarea.selectionEnd;
				var val = this.textarea.value;
				this.textarea.value = val.substring(0, start) + this.applyToSelection(html, val.substring(start, end)) + val.substring(end, val.length);
			}
		}
	},
	
	insertIntoIframe: function(html) {
		if(this.wysiwygview)	{
			document.all ?
				this.doc.selection.createRange().pasteHTML(html) :
				this.action(["insertHTML", html]);
		}
	},
	
	insertHTML: function(html)	{
		this.wysiwygview ?
			this.insertIntoIframe(html):
			this.insertIntoTextarea(html);
	},
	
	focus: function()	{
		(this.wysiwygview ?  this.win : this.textarea).focus();
	},
	
	updateTextarea: function()	{
		if(this.wysiwygview)	this.textarea.value = this.framebody.innerHTML;
		this.cleanHTML();
	},
	
	wordcount: function()	{
		this.updateTextarea();
		var content = this.textarea.get('html');
		content = content.replace(/<[^>]+>/gi, '').clean();
		this.wordcount = content.split(" ").length;
		return this.wordcount;
	},
	
	toElement: function()	{
		return this.textarea;	
	}
	
});


CMS.TextEditor.Buttons = {
	viewsource: function(evt, editor)	{
		evt.stop();
		editor.toggle();
	},
	italic: function(evt, editor)	{
		evt.stop();
		editor.action('italic', false);
	},
	bold: function(evt, editor)	{
		evt.stop();
		editor.action('bold', false);
	},
	heading1: function(evt, editor)	{
		evt.stop();
		editor.action(["formatblock", "<h1>"]);
	},
	heading2: function(evt, editor)	{
		evt.stop();
		editor.action(["formatblock", "<h2>"]);
	},
	heading3: function(evt, editor)	{
		evt.stop();
		editor.action(["formatblock", "<h3>"]);
	},
	heading4: function(evt, editor)	{
		evt.stop();
		editor.action(["formatblock", "<h4>"]);
	},
	heading5: function(evt, editor)	{
		evt.stop();
		editor.action(["formatblock", "<h5>"]);
	},
	heading6: function(evt, editor)	{
		evt.stop();
		editor.action(["formatblock", "<h6>"]);
	},
	paragraph: function(evt, editor)	{
		evt.stop();
		editor.action(["formatblock", "<p>"]);
	},
	orderedlist: function(evt, editor)	{
		evt.stop();
		editor.action("insertorderedlist");
	},
	unorderedlist: function(evt, editor)	{
		evt.stop();
		editor.action("insertunorderedlist");
	},
	link: function(evt, editor)	{
		evt.stop();
		var url = prompt("Please enter a URL to link to");
		editor.action(["createlink", url]);
	},
	undo: function(evt, editor)	{
		evt.stop();
		editor.action("undo");
	},
	redo: function(evt, editor)	{
		evt.stop();
		editor.action("redo");
	}
};