import React from 'react'
import MDEditor from '@uiw/react-md-editor';
import { Button } from 'react-bootstrap';
import PostDetail from './PostDetail'
import { Route } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';
export default function Post() {
    const [value, setValue] = React.useState('');
    const [item, setItem] = React.useState({items:Array.from({ length:20 },(value,i)=>{return i})});
    console.log(item);
    const readmore = () => {
        console.log('a');
        setTimeout(() => {
            setItem(
                {items: item.items.concat(Array.from({length:20}))}
            );
        }, 500);
    }
    return (
    <>
        <Button href="/new">new</Button>
        {/* <InfiniteScroll
                dataLength={100}
                next={readmore}
                hasMore={true}
                loader={''}
                height={200}
                scrollableTarget="App"
                > */}
                    {
                    item.items.map((i, index) => {
                        (<Button key={index}>#{index}</Button>)
                    })}
        {/* </InfiniteScroll> */}
    </>
    );
}