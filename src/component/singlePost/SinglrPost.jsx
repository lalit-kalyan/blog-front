import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "./singlePost.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import { url, imgUrl } from "../../url";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = `${imgUrl}/images/`;
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  //create post...........................................
  useEffect(() => {
    const postid = async () => {
      const res = await axios.get(url + "/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    postid();
  }, [path]);

  //delete post............................
  const handleDelete = async () => {
    try {
      await axios.delete(`${url}/posts/${post._id}`, {
        data: { username: post.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  // UPDate post...........................
  const handleUpdate = async () => {
    try {
      await axios.put(`${url}/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}

        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        ) : (
          <h1 className="singlePostTitle">
            {title}

            {post.username === user.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <input
            type="text"
            value={desc}
            className="singlePostDescInput"
            onChange={(e) => setDesc(e.target.value)}
          ></input>
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
