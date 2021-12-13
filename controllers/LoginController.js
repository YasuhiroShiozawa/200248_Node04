const default_username = process.env.LOGIN_NAME
const default_password = process.env.PASSWORD

exports.index = (req, res) => {
    res.render('login.ejs');
}

exports.auth =  (req, res) => {
    let message = 'ログインできません'
    const input_name = req.body.login_name
    const input_password = req.body.password

    if (input_name == default_username && input_password == default_password) {
        message = 'ログインしました'
    }
    res.send(message);
}