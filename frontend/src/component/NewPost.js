import { React, useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import { Button , Form} from 'react-bootstrap'
import '../css/PostNew.css'
export default function NewPost() {
    const [value, setValue] = useState('');
    const [user, setUser] = useState('42');
    return (
    <section className='new'>
        <h1>NewPost</h1>
    <form className="editor">
    <Form.Control type="input" value={"글쓴이 : "+user} placeholder="글쓴이" disabled/>
    <Form.Control type="input" placeholder="제목" />
    <MDEditor
        value={value}
        onChange={setValue}   
    />
    <div>
    <Button type='submit'>올라가라ㅏㅏㅏㅏㅏㅏ</Button>
    <Button href='/post'>목록</Button>
    </div>
    </form>
    </section>
    );
}