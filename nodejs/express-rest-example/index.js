const express = require('express');

const users = require('./data/users');
const posts = require('./data/posts');

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));


/**
 * GET /api/users
 */
app.route('/api/users')
 .get( (req, res) => {
    res.json(users);
})
.post((req, res) => {
    if (req.body.name && req.body.username && req.body.email) {
        if (users.find(u => u.username == req.body.username)) {
            res.json({error: "Username is taken!"});
            return;
        }

        const user = {
            id: users[users.length -1].id + 1,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email
        }

        users.push(user);
        res.json(users[users.length - 1]);
    } else res.json({error: "Insufficient data"});
})

/**
 * @method GET /api/:id
 * @param :id
 */
app.get('/api/users/:id', (req, res, next) => {
    const user = users.find(u => u.id == req.params.id);
    console.log(user);
    if (user) res.json(user);
    else next();
});

/**
 * GET /api/posts
 */
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

/**
 * GET 
 */
app.get('/api/posts/:id', (req, res, next) => {
    const post = posts.find(p => p.id == req.params.id);
    if (post) res.json(post);
    else next();
});



app.get('/', (req, res) => {
    res.send('Work in progress!');
})


// 404 Not Found Middleware
app.use((req, res, next) => {
    res.status(404);
    res.json({error: "Resource not found!"});
});


app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})