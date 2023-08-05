import { useState, useEffect } from "react";
import Post from "./Components/Post";
import axios from 'axios';
import CreatePost from "./Components/CreatePost";

function App() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const res = await axios.get('http://localhost:4001/posts');
    setPosts(res.data);
  }
  useEffect(() => {
    getPosts();
    return () => {
      console.log('cleanup');
    };
  }, []);

  return (
    <section className='container-fluid h-full flex flex-col'>
      <CreatePost getPosts={getPosts} />
      {
        (posts && posts.length > 0) ?
          posts.map((post, index) => (
            <Post key={index} post={post} getPosts={getPosts}></Post>
          )) :
          (<p className="text-sm capitalize mb-2 px-2.5">No Posts yet...</p>)
      }
    </section>
  );
}

export default App;
