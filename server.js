
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  //app.set('view options', { layout: false });   //close Page Layout
  /*  database setting
  app.use(express.cookieParser()); 
app.use(express.session({ 
secret: settings.cookieSecret, 
store: new MongoStore({ 
db: settings.db 
})
*/
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/u/:user', routes.user); 
app.post('/post', routes.post);
app.get('/reg', routes.reg); 
app.post('/reg', routes.doReg); 
app.get('/login', routes.login); 
app.post('/login', routes.doLogin); 
app.get('/logout', routes.logout); 
//app.get('/admin/indexAdmin',routes)

/*
/：首页 
. /u/[user]：用户的主页 
. /post：发表信息 
. /reg：用户注册 
. /login：用户登录 
. /logout：用户登出 
*/

app.listen(process.env.port || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
