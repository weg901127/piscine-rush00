import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { useCookies } from 'react-cookie';
export default function Logout() {
    const [cookies, setCookie, removeCookie] = useCookies(['name']);
    removeCookie('name');
    //jwt처리
    return (
        <>
            <Redirect to="/"/>
        </>
    );
}