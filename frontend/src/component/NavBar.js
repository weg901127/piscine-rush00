import React, { Children , useState} from "react";
import Nav from 'react-bootstrap/Nav';
import { Route, Link } from 'react-router-dom';
import Post from './Post';
export default function NavBar() {
    const [isLogin, setIsLogin] = useState(true); //context로 바꾸기
    return (
        <>
        <Nav>
        { !isLogin ? 
        <>
        <Nav.Item>
            <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/login">Login</Link>
        </Nav.Item> 
        </>
        :
        <>
        <Nav.Item>
            <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/post">Post</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/profile">Profile</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/logout">Logout</Link>
        </Nav.Item>
        </>
        }

        </Nav>
        </>
    );
}