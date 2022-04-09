import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { imgUrl } from "../../url";
import avatar from "./avatar.png";

export default function Topbar() {
  const [slide, setSlide] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = `${imgUrl}/images/`;
  const profileImg = user?.profilePic;

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/");
    
  };

  const slideHandle = () => {
    setSlide(!slide);
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className={!slide ? "topCenter" : " topCenter menuDisplay"}>
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && (
            <li className="topListItem" onClick={handleLogout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            {!profileImg ? (
              <img className="topImg" src={avatar} alt={avatar} />
            ) : (
              <img
                className="topImg"
                src={PF + profileImg}
                alt={user.profilePic}
              />
            )}
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
      <h2 className="menuSlider" onClick={slideHandle}>
        MENU
      </h2>
    </div>
  );
}
