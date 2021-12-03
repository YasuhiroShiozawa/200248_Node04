const express = require('express')
const router = express.Router()

const default_username = process.env.LOGIN_NAME
const default_password = process.env.PASSWORD

router.get('/', (req, res) => {
    let data = {}
    data.title = '何か-NANIKA-'
    res.render('index.ejs',data);
})

router.get('/login', (req, res) => {
    res.render('login.ejs');
})

router.get('/profile', (req, res) => {
    res.render('profile.ejs');
})

router.get('/item/:id', (req, res) => {
    const id = req.params.id
    res.render('item/show.ejs');
    console.log(id)
})

router.post('/auth', (req, res) => {
    let message = 'ログインできません'
    const input_name = req.body.login_name
    const input_password = req.body.password

    if (input_name == default_username && input_password == default_password) {
        message = 'ログインしました'
    }
    res.send(message);
})

router.get('/dp', (req, res) => {
    res.send("dpって何ですか");
})

module.exports = router