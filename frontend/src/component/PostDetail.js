import { React, useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import { Button , Form} from 'react-bootstrap'
import '../css/PostNew.css'
export default function PostDetail(props) {
    const [user, setUser] = useState('a');
    console.log(props.match.params.Id) //게시글 ID
    return (
    <section className='new'>
    <form className="editor">
    <Form.Control type="input" value={"글쓴이 : "+user} placeholder="글쓴이" disabled/>
    <Form.Control type="input" placeholder="제목" disabled/>
    <MDEditor.Markdown
        source={'## safsafsafasdfasdfsa'}
    />
    <div>
    <Button href='/post'>목록</Button>
    <Button href='/post'>수정</Button>
    <Button href='/post' variant='danger'>삭제</Button>
    </div>
    </form>
    </section>
    );
}