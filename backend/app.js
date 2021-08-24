const express = require ('express');
const { sequelize } = require('./models/index');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
require('dotenv').config();
var cors = require('cors');
const cookie = require('cookie');
const cookiePaser = require('cookie-parser');

let app = express();
const router = express.Router();
const models = require('./models');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

// sequelize가 연결 되었는지 확인.
sequelize.authenticate().then((res)=>{console.log("connected");} ).catch((err)=>{
    console.error(err);
})
/*
function send500Message(response) {
    console.log('Error : 500');
    res.status(500);
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
/*
const hashPw = (req, res) => {
    const saltRounds = 5;
    let pw = req.body.pw;

    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            return console.error(err);
        }
        bcrypt.hash(pw, salt, (err, hashedPassword) => {
            if (err) {

                return console.error(err);
            }
            pw = hashedPassword;
        })
    })
}
*/


const insertData = (req, res) => {
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
        return console.error(err);
    }
    bcrypt.hash(req.body.pw, salt, (err, hashedPassword) => {
    if (err) {
        return console.error(err);
    }
    models.Users.create({email: req.body.email, pw: hashedPassword})
    .then(result => {
        console.log("insert data!!!!");
        //res.json(result);
    })
    .catch(err => {
        console.log("not insert data!!!!");
        console.error(err);
    })
    })
})
};

/*
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
*/

/*
const createToken = (id) => {
    const token = jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '30m'},
        function (err, token) {
            if (err) {
                console.error(err);
                return ;
            }
            console.log('토큰 생성', token);
        });
});
*/

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
   
});

app.post('/login', async function(req, res) {
    // 해싱
    // 데이터베이스에 있는 특정 유저 찾기
    // 그 pw와 req.body.pw를 해싱한 것과 같은지 비교 : compare
    console.log("hello")
    try {
        const user = await models.Users.findOne({where: { email: req.body.email }});
        if (user) {
        console.log('hello2')
            bcrypt.compare(req.body.pw, user, (err, same) => {
                if (same) {
                    const token = jwt.sign({ }, process.env.SECRET_KEY, { expiresIn: '30m'});
                    //console.log(token);
                    if (token !== undefined)
                        res.cookie('accessToken', token, { maxAge:1000*60*30 });
                }
            })
        }
    } catch(err) {
        console.error(err);
    }
    /*
    const searchUser = async(req) => {
        console.log('hello2')
        await models.Users.findOne({where: { email: req.body.email}}, (err, result) => {
            console.log('hello2-0')
            if (err) {
                console.error(err);
            } else {
                console.log('hello2-1')
                if (result) {

                    (function a(req) {
                        console.log('hello3')
                    bcrypt.compare(req.body.pw, result, (err, same) => {
                    if (same) {
                        //
                        const token = jwt.sign({ }, process.env.SECRET_KEY, { expiresIn: '30m'});
                        //console.log(token);
                        if (token !== undefined)
                            res.cookie('accessToken', token, { maxAge:1000*60*30 });
                    }
                    })
                })(req)
            
                }
            }
        })
        ;

    }
    searchUser(req);
    */
/*
        if (true) {
        const token = jwt.sign({ }, process.env.SECRET_KEY, { expiresIn: '30m'});
        //console.log(token);
        if (token !== undefined)
            res.cookie('accessToken', token, { maxAge:1000*60*30 });
    }
    else {
        send500Message(res);
    }
*/
    res.end();
    
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