import { React, useState } from 'react'
import '../css/Register.css'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const submit = async() =>{
        if (password==passwordCheck)
            await axios.post('http://127.0.0.1:4242/register',{
                data: {
                    email: email,
                    password: password
                }
            });
    }
    return (
        <>
        <form >
        <h1>회원가입</h1>
            <Form.Control type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="email" />
            <Form.Control type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" />
            <Form.Control type="password" value={passwordCheck} onChange={(e) => {setPasswordCheck(e.target.value)}} placeholder="Password 확인" />
            <Button className="btn_register" onClick={submit}>회원가입</Button>
        </form>
        </>
    );
}