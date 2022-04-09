import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Header from "../../component/header/Header";
import Posts from "../../component/posts/Posts";
import Sidebar from "../../component/sidebar/Sidebar";
import axios from "axios";
import { url } from "../../url";

import "./homepage.css";
export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  
  

  useEffect(() => {
    
    const fetchPosts = async () => {
      const res = await axios.get( url + "/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
