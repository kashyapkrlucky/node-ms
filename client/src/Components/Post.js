import React, { useState, useEffect } from 'react'
import Comment from './Comment'
import CreateComment from './CreateComment'
import axios from 'axios';

function Post({ post, getPosts }) {
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    const res = await axios.get(`http://localhost:4002/post/${post.id}/comments`);
    setComments(res.data);
  }
  useEffect(() => {
    // getComments();
    return () => {
      console.log('cleanup');
    };
  }, []);
  return (
    <div className='flex flex-col p-2.5 m-2.5 border-2 border-slate-300'>
      <h3 className='text-blue-600 font-bold text-md capitalize mb-2'>
        {post.title}
      </h3>
      <div>
        {
          post.comments ?
          post.comments.map((comment, index) => (
              <Comment key={index} comment={comment}></Comment>
            )) :
            (<p className='text-sm capitalize mb-2 px-2.5'>No Comments yet...</p>)
        }
        <CreateComment postId={post.id} getPosts={getPosts} />
      </div>
    </div>
  )
}

export default Post