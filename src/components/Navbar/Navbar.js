import React, { Component, useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import useStyles from "./styles.js";
import { Avatar } from "@material-ui/core";
// import "../Plantshop.css";
import styles from "./Navbar.module.css";
import "./Navbar.css";

const Navbar = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const classes = useStyles();

const logout = () => {
  dispatch({ type: "LOGOUT"})

  // navigate("/")

  setUser(null)
}

useEffect(() => {
  const token = user?.token

  if(token){
      const decodedToken = decode(token);

      //decodedToken.exp is in miliseconds so we have to mutiply by 1000
      if(decodedToken.exp * 1000 < new Date().getTime()) {
          logout();
      }
  }

  setUser(JSON.parse(localStorage.getItem("profile")))
}, [location]);

const avatar = useRef();

  const name = user?.result?.firstName ? user?.result?.firstName : user?.result?.name;

    return (
      <div>
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </head>
        <div className={styles.homeParent}>
        <nav>
        <Link to="/"><div className={styles.home}>Home</div></Link>
        <Link to="/about"><div className={styles.about}>About</div></Link>
        <Link to="/shop"><div className={styles.shop}>Shop</div></Link>
        <Link to="/blog"><div className={styles.blog}>Blog</div></Link>
        <Link to="/contact"><div style={{width: "112%"}} className={styles.contactUs}>Contact Us</div></Link>
        <Link to="/cart"><i style={{fontSize: "30px", marginLeft: "30px", color: "#25523b"}} class="fa fa-shopping-cart" aria-hidden="true"></i></Link>

        {user ? 
                <div className="profile">
                    <Avatar className={classes.purple} alt={user.result.firstName ? user.result.firstName : user.result.name} src={user.result.picture}>{user.result.firstName ? user.result.firstName.charAt(0) : user.result.name.charAt(0)}</Avatar>
                    <div className="profile-container" style={name.length > 6 ? {fontSize: "11px", marginRight: "10px", marginLeft: "5px"} : {}
                    }>
                    <p style={name.length > 6 ? {fontSize: "12px", marginRight: "0", marginLeft: "0"} : {}
                    }>{user.result.firstName ? user.result.firstName : user.result.name}</p>
                    <span className="logout-btn" onClick={() => logout()}>Logout</span>
                    </div>
                </div>
                
                : <div className="login-container">
                <Link style={{textDecoration: 'none'}} to="/login"><div className={styles.loginWrapper}>
                  <div className={styles.login}>Login</div>
                </div></Link>
                <Link style={{textDecoration: 'none'}} to="/login"><div className={styles.registerWrapper}>
                  <div className={styles.register}>Register</div>
                </div></Link>
                </div>}

        {/* <div className={styles.allCategoryParent}>
          <div className={styles.allCategory}>All Category</div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div> */}
        
        </nav>
        <img className={styles.layer2Icon} alt="" src="/layer-2.svg" />
        <div className={styles.planty}>Planty</div>
        </div>
      </div>
    )

    // function showProfile(){
    //   let profile = document.getElementById("profile-container");

    //   if(profile.style.maxHeight === "200px"){
    //     profile.style.padding = "0";
    //     profile.style.border = "none";
    //     profile.style.maxHeight = "0px";
    //   } else{ 

    //     profile.style.padding = "10px 15px 10px 15px";
    //     profile.style.border = "2px solid #201f1f";
    //     profile.style.maxHeight = "200px";
    //   }
    // }
}

export default Navbar;