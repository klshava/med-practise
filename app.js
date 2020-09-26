const express = require('express')
const database = require('./models/db')
const app = express()
const passport = require('passport')
const session = require('express-session')
const mainRoutes = require('./mainRoutes')
require('./models/db')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const bodyParser = require('body-parser')
var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {
            if (req.url === '/') {
                log('Received message: ' + body);
            } else if (req.url = '/scheduled') {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
            }

            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
            res.end();
        });
    } else {
        res.writeHead(200);
        res.write(html);
        res.end();
    }
});
app.use(session({

  secret: '%4$#kldfkalfg@@*)(new secrete)&&lkdsfls!',
  resave: false,
  saveUninitialized: true,
  store: database.sessionStoreConnection,
  cookie: { originalMaxAge: 6 * 600000 }

}))

// const passport = require('passport')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/public', express.static('./public'))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use('/', mainRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
