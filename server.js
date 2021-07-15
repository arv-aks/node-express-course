const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' }
]
app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'successfully got users.',
        users: mockUserData
    })
})

app.get('/users/:id', function (req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

//post
app.post('/login', function(req, res){
    const username=req.body.username;
    const password =req.body.password;

    console.log(req.body.username)

    // res.json({
    //     result: true, 
    //     username: req.body.username, 
    //     password: req.body.password, 
    //     why: "test successful"
    // })

    const mockUserName="billythekid";
    const mockPassword="secret";
    if(username == mockUserName && password == mockPassword){
        res.json({
            success: true, 
            message: "username and password match!",
            token: 'encrypted token'
        })
    }else{
        res.json({
            success: false, 
            message: 'username or password incorrect'
        })
    }
})

app.listen(8000, function () {
    console.log("server is listening")
})