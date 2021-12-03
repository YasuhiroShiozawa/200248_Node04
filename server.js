const express = require('express')
require('dotenv').config()
const host = process.env.HOST
const port = process.env.PORT
const default_username = process.env.LOGIN_NAME
const default_password = process.env.PASSWORD

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true}))


app.get('/', (req, res) => {
    res.send("Hello YSE!!!");
})

app.get('/profile', (req, res) => {
    res.send("待て　あわてるな　これは孔明の罠だ");
})

app.post('/auth', (req, res) => {
    let message = 'ログインできません'
    const input_name = req.body.login_name
    const input_password = req.body.password

    if (input_name == default_username && input_password == default_password) {
        message = 'ログインしました'
    }
    res.send(message);
})

app.get('/dp', (req, res) => {
    res.send("dpって何ですか");
})

app.listen(port, host, () => {
    console.log('http://' + host + ':' + port)
})