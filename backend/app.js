const express = require ('express');
const { sequelize } = require('./models/index');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
require('dotenv').config();
var cors = require('cors');

let app = express();
const router = express.Router();
const models = require('./models');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

// sequelize가 연결 되었는지 확인.
sequelize.authenticate().then((res)=>{console.log("ok");} ).catch((err)=>{
    console.err(err);
})
/*
function send500Message(response) {
    console.log('Error : 500');
    done(JSON.parse('500 Internal Server Error'));
    response.end();
} // json 보내기 이게 맞나?

// check User in DataBase
function authIsOwner(req, res, token) {
    try {
        let isOwner = false;
        let check = jwt.verify(token, "");
        // 데이터 베이스에 유저가 있는지 확인
        if (check) {
            isOwner =true;
        }
    }
    catch (e) {
        console.log(e);
    }
    return isOwner;
};
*/

const driver = () => {
    sequelize.sync().then(() => {
        console.log('초기화 완료.');
    }).catch((err) => {
        console.error('초기화 실패');
        console.error(err);
    });
};

const insertData = (req, res) => {
    models.Users.create({email: req.body.data.email, pw: req.body.data.pw})
    .then(result => {
        console.log("insert data!!!!");
        //res.json(result);
    })
    .catch(err => {
        console.log("not insert data!!!!");
        console.error(err);
    })
};


let createToken = (id) => new Promise((resolve, reject) => {
    let token = jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '30m'},
        function (err, token) {
            if (err) {
                reject(err);
                return ;
            }
            console.log('토큰 생성', token);
            resolve(token);
        })
});


/*
// check login
function authStatusUI(req, res) {
    let authStatusUI = '';
    if (authIsOwner(req, res)) {

    }
    return authStatusUI;
}

app.get('/', function(req, res) {
    res.writeHead(200, { 'Content-Type': text/plain})
    response.write('<h1>500 Internal Server Error</h1>');

})
*/

/*
app.post('/register', (req, res)=> {
    let id;
    let pw;

    id = post.id;
    pw = post.pw;
})
*/
app.post('/register', function(req, res) {
    // 데이터 베이스에 유저가 있는지 확인
    /*
    if (authIsOwner(req, res) === false) {
        send500Message(res);
    }
    
    
    else {
        
    }
    res.status(200);
    */
    driver();
    insertData(req, res);
    //console.log(createToken());
    //console.log(req.body);
    //console.log(req.body.email);
   
});

app.post('/login', function(req, res) {
    createToken();
});
/*
app.get('/post/:id', function(req, res) {
    // authStatusUI(req, res);
})

app.get('/post', function(req, res) {
    // authStatusUI(req, res);
})
*/
app.listen(4242);

//module.exports = router;