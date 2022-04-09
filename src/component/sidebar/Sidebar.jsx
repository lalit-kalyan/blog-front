import { Link } from "react-router-dom";
//import {useLocation} from "react-router";
import { useState, useEffect } from "react";
import "./sidebar.css";
import axios from "axios";
import { url } from "../../url";


export default function Sidebar() {
  const [cat, setCate] = useState([]);
  

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get(url+"/category");
      setCate(res.data);
    };
    getCat();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">HAPPY LIFE...?</span>
        <img
          src="https://images.unsplash.com/photo-1641522500683-7cf375359883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt=""
        />
        <p>
          If you want to feel your file you must have experience of ups and
          downs of life . If you want to be a happy human being you must
          experience hard days in you life and life is in you....!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => (
            <li className="sidebarListItem" key={c._id}>
              <Link className="link" to={`/?cat=${c.name}`}>
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
