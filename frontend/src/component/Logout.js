import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
export default function Logout() {
    //jwt처리
    return (
        <>
            <Redirect to="/"/>
        </>
    );
}