import React from 'react'
import MDEditor from '@uiw/react-md-editor';
import { Button } from 'react-bootstrap';

export default function Post() {
    const [value, setValue] = React.useState('');    
    return (
    <>
        <Button href="/new">new</Button>
    </>
    );
}