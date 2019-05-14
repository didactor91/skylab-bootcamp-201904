const express = require('express')
const { injectLogic, checkLogin } = require('./middlewares')
const package = require('./package.json')
const bodyParser = require('body-parser')
const session = require('express-session')


const urlencodedParser = bodyParser.urlencoded({ extended: false })

const { argv: [, , port = 8080] } = process

const app = express()

app.set('view engine', 'pug')
app.set('views', 'components')

app.use(session({
    secret: 'my super secret phrase to encrypt my session',
    resave: true,
    saveUninitialized: true
}))

app.use(express.static('public'), injectLogic)

app.get('/', checkLogin('/home'), (req, res) => {
    res.render('landing')
})

app.get('/register', checkLogin('/home'), (req, res) => {
    res.render('register')
})

app.post('/register', [checkLogin('/home'), urlencodedParser], (req, res) => {
    const { body: { name, surname, email, password }, logic } = req

    try {
        logic.registerUser(name, surname, email, password)
            .then(() => res.render('register-ok'))
            .catch(({ message }) => {
                res.render('register', { name, surname, email, message })
            })
    } catch ({ message }) {
        res.render('register', { name, surname, email, message })
    }
})

app.post('/user/authenticate', jsonParser, (req, res) => {
    const { body: { email, password } } = req


    try {
        return logic.authenticateUser(email, password)
            .then((response) => res.json({ response }))
            .catch(({ message }) => {
                res.status(400).json({ error: message })
            })
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
})

app.get('/search', jsonParser, (req, res) => {

    const { headers: { authorization } } = req
    const { query: { q } } = req
    let query = q
    let token = authorization.slice(8, authorization.length)


    try {
        logic.searchDucks(token, query)
            .then((results) => res.json({ results }))
            .catch(({ message }) => {
                res.status(400).json({ error: message })
            })
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
})

app.get('/search/detail/:id', jsonParser, (req, res) => {

    const { headers: { authorization }, params: {id} } = req

    let token = authorization.slice(8, authorization.length)

    try {
        logic.retrieveDuck(token, id)
            .then((duck) => res.json({ duck }))
            .catch(({ message }) => {
                res.status(400).json({ error: message })
            })
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
})

app.post('/toogleFav', jsonParser, (req, res) => {

    const { headers: { authorization } } = req
    const { query: { q } } = req
    let id = q
    let token = authorization.slice(8, authorization.length)


    try {
        logic.toggleFavDuck(token, id)
            .then(() => res.status(200).json({ message: "ok added" }))
            .catch(({ message }) => {
                res.status(400).json({ error: message })
            })
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
})

app.get('/retriveFav', jsonParser, (req, res) => {

    const { headers: { authorization } } = req
    let token = authorization.slice(8, authorization.length)


    try {
        logic.retrieveFavDucks(token)
            .then((duck) => res.status(200).json({ duck }))
            .catch(({ message }) => {
                res.status(400).json({ error: message })
            })
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
})

app.get('/retriveUser', jsonParser, (req, res) => {

    const { headers: { authorization } } = req
    let token = authorization.slice(8, authorization.length)


    try {
        logic.retrieveUser(token)
            .then((data) => res.status(200).json({ data }))
            .catch(({ message }) => {
                res.status(400).json({ error: message })
            })
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
})

app.post('/logout', (req, res) => {
    req.session.destroy()

    res.redirect('/')
})

app.use(function (req, res, next) {
    res.redirect('/')
})

app.listen(port, () => console.log(`${package.name} ${package.version} up on port ${port}`))