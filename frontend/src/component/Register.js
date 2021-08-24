import { React, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import '../css/Register.css'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
require('dotenv').config();
export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [done, setDone] = useState(null);
    const [error, setError] = useState(null);
    const [cookies, setCookie] = useCookies(['name']);

    const submit = async() =>{
        if (email === ''){
            setError('이메일을 입력하세요');
            return;
        }
        if (email.search(/(.*)@(.*)\.(.*)/g) === -1){
            console.log(email);
            console.log(email.indexOf(/(.*)\@(.*)(\..*)/g));
            setError('이메일을 확인하세요');
            return;
        }
        if (password !== '' && password === passwordCheck)
            await axios.post(process.env.REACT_APP_ENDPOINT+'register',{
                data: {
                    email: email,
                    password: password
                }
            }).then(setCookie('name','42',{ path: '/', maxAge: 2000})).then(
               setDone(true)
            );
        else
            setError('비밀번호를 확인하세요');
            
    }
    if (done){
        return (
            <Redirect to="/" />
        );
    }
    return (
        <>
        <form>
        <h1>회원가입</h1>
            <Form.Control type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="email" />
            <Form.Control type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" />
            <Form.Control type="password" value={passwordCheck} onChange={(e) => {setPasswordCheck(e.target.value)}} placeholder="Password 확인" />
            { error && <h3 className="error">{error}</h3>}
            <Button className="btn_register" onClick={submit}>회원가입</Button>
        </form>
        </>
    );
}