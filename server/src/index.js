const restify = require('restify');
const api = require('./api');
const restifyBodyParser = require('restify-plugins').bodyParser;
const corsMiddleware = require('restify-cors-middleware')

const server = restify.createServer();

const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional
    origins: ['*']
})

server.pre(cors.preflight)
server.use(cors.actual)

const isAuthenticated = (req, res, next) => {
    next();
    // api.authenticate(req.headers.auth).then(result => {
    //     next();
    // }).catch(next);
}

server.use(restifyBodyParser());

// get guestlist
server.get('/guestlist', isAuthenticated, (req, res, next) => {
    api.getGuestList().then(result => {
        res.json(result);
    })
});

// create guest
server.post('/guestlist', (req, res, next) => {
    api.addGuest(req.body.name, req.body.surname, req.body.id).then(result => {
        res.status(201);
        res.json(result);
    })
});

// delete guest
server.del('/guestlist/:id', (req, res, next) => {
    api.deleteGuest(req.params.id).then(result => {
        res.status(204);
        res.end();
    })
});

// update guest
server.post('/guestlist/:id', (req, res, next) => {
    api.updateGuest(req.params.id, req.body);
})

// login
server.post('/login', (req, res, next) => {
    api.login(req.body.username, req.body.password).then(result => {
        res.json(result);
    }).catch(next);
});


// start server
server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});