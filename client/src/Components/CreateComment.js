
import React, { useState } from 'react';
import axios from 'axios';
import Input from './Input';
import Button from './Button';

function CreateComment({ postId, getPosts }) {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const onCreate = async () => {
        if (text) {
            const res = await axios.post(`http://localhost:4004/post/${postId}/comments/create`, { text });
            if (res) {
                getPosts();
                setText('');
            }
        }
    }
    return (
        <div className='py-2.5'>
            <h3 className='font-light text-sm mb-2'>Add your comments</h3>
            <Input placeholder='Enter your comment' value={text} onChange={handleChange} />
            <Button className='bg-slate-700 text-sm px-2.5 py-2 text-white rounded-sm' onClick={onCreate}></Button>
        </div>
    )
}

export default CreateComment