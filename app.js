var express = require('express'),
    app = express(),
    controller = require('./classes/controller.class');


controller.initialize(app);


app.configure(function(){
    app.set('view engine', 'jade');
    app.use(express.static(__dirname + '/public'));
    app.use(express.cookieParser());
    app.use(express.session({
        secret: "My simple node.js CMS" 
    }));

});


['/', /^\/[^cms?].*/i].forEach(function(regex){
    app.get(regex, function(req, res){
        res.render('frontend/page.ejs', {
            path: req.url
        });
    });
});


app.listen(3000);