import React from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../css/Login.css'
export default function Login() {
    return (
        <>
        <form >
        <h1>로그인</h1>
            <Form.Control type="email" placeholder="name@example.com" />
            <Form.Control type="password" placeholder="Password" />
            <Button className="btn_login"href='/login'>로그인 가즈아ㅏㅏㅏ</Button>
            <Button className="btn_register"href='/register'>회원가입</Button>
        </form>
        </>
    );
}