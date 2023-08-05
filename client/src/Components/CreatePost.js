import React, { useState } from 'react';
import axios from 'axios';
import Input from './Input';
import Button from './Button';

function CreatePost({ getPosts }) {
    const [title, setTitle] = useState('');
    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const onCreate = async () => {
        if (title) {
            const res = await axios.post('http://localhost:4001/post/create', { title });
            if (res) {
                getPosts();
                setTitle('');
            }
        }
    }
    return (
        <div className='p-2.5 mb-3'>
            <h3 className='font-light text-xl mb-5'>Create Post</h3>
            <Input placeholder='Enter post title' value={title} onChange={handleChange} />
            <Button className='bg-slate-700 text-sm px-2.5 py-2 text-white rounded-sm' onClick={onCreate}></Button>
        </div>
    )
}

export default CreatePost
