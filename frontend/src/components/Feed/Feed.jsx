import { useEffect } from "react";
import { useState } from "react";
import Post from "../Post/Post";
import Shared from "../Shared/Shared";
import "./style.css";
import Axios from 'axios'

const Feed = () => {
  const [posts,setPosts] =useState([])

  useEffect(() => {
    const fetchPosts = async (url)=>{
      return await Axios.get(url)
    }
    const res = fetchPosts('posts/timeline/')
    console.log(res)
  },[])
  
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Shared />
        {Posts.map((p)=>{
          return(
            <Post Post={p} key={p.id}/>
          )
        })}
      </div>
    </div>
  );
};

export default Feed;
