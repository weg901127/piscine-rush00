import React from 'react'
import { Spinner } from 'react-bootstrap'
import '../css/loading.css'
export default function Loading() {
    return (
    <section className="loading">
        <Spinner role="status" animation="grow">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h1>로딩중...</h1>
    </section>
    );
}