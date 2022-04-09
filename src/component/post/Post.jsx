import { Link } from "react-router-dom";
import "./post.css";
import { imgUrl } from "../../url";
import { useContext } from "react";
//import { Context } from "./context/Context";
import { Context } from "../../context/Context";

export default function Post({ postData }) {
  const PF = `${imgUrl}/images/`;
  const { user } = useContext(Context);
  


  const alertHandle=()=>{
    alert("To read the full artical you have to login first");
  }

  return (
    <div className="post">
      {postData.photo && (
        <img className="postImg" src={PF + postData.photo} alt="" />
      )}

      <div className="postInfo">
        <div className="postCats">
          {postData.category.map((c) => (
            <span className="postCat">
              <Link className="link" to="/posts?cat=Music">
                {c.name}
              </Link>
            </span>
          ))}
        </div>

        {!user ? (
          <>
          
            <span className="postTitle" onClick={alertHandle} >{postData.title}</span>
          </>
        ) : (
          <span className="postTitle">
            <Link to={`/post/${postData._id}`} className="link">
              {postData.title}
            </Link>
          </span>
        )}

        <hr />
        <span className="postDate">
          {new Date(postData.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{postData.desc}</p>
    </div>
  );
}
