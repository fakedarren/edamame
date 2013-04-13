var express = require('express'),
    app = express(),
    controller = require('./backend/classes/controller.class'),
    plugins = require('./backend/classes/plugins.class.js');


app.set('view engine', 'jade');


app.use(express.static(__dirname + '/public'));
app.use(express.errorHandler());
app.use(express.cookieParser());
app.use(express.session({
    secret: "My simple node.js CMS" 
}));


global.plugins = plugins.initialize(app);

controller.initialize(app);


['/', /^\/[^cms?].*/i].forEach(function(regex){
    app.get(regex, function(req, res){
        res.render('frontend/page.ejs', {
            path: req.url
        });
    });
});


app.listen(3000);