exports.index = (req, res) =>{
    let data = {}
    data.title = '何か-NANIKA-'
    res.render('index.ejs',data);
}

exports.profile = (req, res) => {
    let user={
        name:'塩澤泰寛',birthplace:'横浜のどこか',hobby:['アニメ','鉄道','楽器']
    }
    let data = {}
    data.title = 'プロフィール'
    data.user = user

    res.render('profile.ejs',data);
}