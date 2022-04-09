import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((postsData) => (
        <Post  postData= {postsData} key= {postsData._id} />
      ))}
    </div>
  );
}
