const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res
//app.use([logger, authorize])
//  req => middleware => res

// app.use([logger, authorize])
// app.use(express.static('./public'))

//app.use('/api',logger)
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.get('/api/products', (req, res) => {
    res.status(200).send('Products Page')
})

app.get('/api/items', (req, res) => {
    res.status(200).send('Items Page')
    console.log(req.user)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})