var express 		= require('express'),
    auth 			= require('http-auth'),
    compression   	= require('compression'),
    path          	= require('path');;

// Configure basic auth
var basic = auth.basic({
    realm: 'SUPER SECRET STUFF'
}, function(username, password, callback) {
    callback(username == 'cchai' && password == 'c-DCkrDKU=B4n-_Q');
});

// Set up express app
var app = express();

// Create middleware that can be used to protect routes with basic auth
app.use(auth.connect(basic));
app.use(compression());


app.use(express.static(path.join(__dirname, '../clisss_angularjs/public/admin')));
app.use(function(req, res, next) {
  return res.sendFile(__dirname + '../clisss_angularjs/public/client/index.html');
});

app.listen(8080);

