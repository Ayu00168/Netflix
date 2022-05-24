import React, { useContext, useState } from "react";
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthAction";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.LqhddEhHWnRMFIXC6sPT0QHaCS&pid=Api&rs=1&c=1&qlt=95&w=334&h=102"
            alt=""
          />
          <Link to="/" className="link">
            <span> Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span> Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span> Movies</span>
          </Link>
          <span> New and Popular</span>
          <span> My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://cdn.pixabay.com/photo/2015/06/19/09/39/lonely-814631__340.jpg"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
