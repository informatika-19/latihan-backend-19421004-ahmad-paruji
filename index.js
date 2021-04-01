const express = require('express')
const app = express()
const bodyParser = require('body-parser')
 
app.use(bodyParser.json({
    extended: true
    limit: '20mb'
}))

app.use(bodyParser.urlencoded({
    extended: true
    limit: '20mb'
}))

app.get('/', function (req, res) {
  res.send('<h1>Hello Word</h1>')
})
 
app.get('/profile/:provinsi', (req, res) => {
    console.log(req.params)
    res.send('Provinsi Anda ' + req.params.provinsi)
})

app.get('/daerah/:namadaerah/:id', (req, res) => {
    const namaDaerah = req.params.namaDaerah
    const idDaerah = req.params.id
    res.send('anda Di ' +namaDaerah + ' Id Daerah = ' + idDaerah)
})

app.post('/register', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(3000, () => {
    console.log('Server Started')
})