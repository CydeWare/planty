
import styles from "./Login.module.css";
import Navbar from "../Navbar/Navbar.js";
import "./Login.css";
import React, { Component, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import { IconButton, InputAdornment } from '@material-ui/core';
import axios from "axios";
import { useNavigate, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signin, signup, sign } from "../../actions/auth";
import Icon from "./Icon.js";
import * as jose from 'jose'

const Login = () => {
    
  const initialState = { firstName: " ", lastName: " ", email: " ", password: " ", confirmPassword: " "};

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState(initialState)
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [type, setType] = useState("");
  const error = useSelector((state) => state.error);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if(isSignup === true){
      if(formData.password !== formData.confirmPassword){
        return setConfirmPassword(true);
      }else{
        setConfirmPassword(false);
      }
    }
    

    if(isSignup){
        dispatch(signup(formData, navigate))
    } else {
        dispatch(signin(formData, navigate))
    }

}

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
}

const switchMode = () => {
  setIsSignup((prevIsSignup) => !prevIsSignup)
  setShowPassword(false);
}

const handleShowPassword = (e) => {

setType(e.target.type);
return setShowPassword((prevShowPassword) => !prevShowPassword)

}
  

const handleLogin = useGoogleLogin({
  // flow: 'auth-code',
  // scope: "https://www.googleapis.com/auth/userinfo.profile",
  onSuccess: async (tokenResponse) => {
      console.log(tokenResponse)
      const data = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`)
      const result = await data?.json();
      console.log(data);
      console.log(result);

      // const secret = new TextEncoder().encode(
      //     "test"
      // );

      // const token = await new jose.SignJWT({ email: result.email, id: result.sub}).setProtectedHeader({ alg: "HS256"}).setExpirationTime('1h').sign(secret);
      
      // console.log(token);
      

      // const secret = new TextEncoder().encode("test");

      // const jwt = await new SignJWT({ email: result.email, id: result.sub })
      //             .setProtectedHeader({ alg: "HS256" })
      //             .setExpirationTime('1h')
      //             .sign(secret);

      try{

          dispatch(sign(result, navigate))

      }catch(error){
          console.log(error)
      }

      //In google login, make your own token?
  },
  onError: tokenResponse => console.log(tokenResponse)
});

  function showError(error){
    if(error){
        return ( <p style={{color:"red", fontSize:"12px", textAlign:"center"}}>{error}</p> )
    }
}

    return (
        <div>
            <div className={styles.plantShop}>
      <img
        className={styles.watercolorPaperTexture1Icon}
        alt=""
        src="/watercolorpapertexture-1@2x.png"
      />
      <img
        className={styles.watercolorPaperTexture2Icon}
        alt=""
        src="/watercolorpapertexture-1@2x.png"
      />
      <img
        className={styles.watercolorPaperTexture3Icon}
        alt=""
        src="/watercolorpapertexture-1@2x.png"
      />
      <img
        className={styles.watercolorPaperTexture4Icon}
        alt=""
        src="/watercolorpapertexture-1@2x.png"
      />
      <img
        className={styles.watercolorPaperTexture5Icon}
        alt=""
        src="/watercolorpapertexture-1@2x.png"
      />
      <img
        className={styles.watercolorPaperTexture6Icon}
        alt=""
        src="/watercolorpapertexture-1@2x.png"
      />
      <img
        className={styles.watercolorPaperTexture7Icon}
        alt=""
        src="/watercolorpapertexture-1@2x.png"
      />
      
      <Navbar />
      
      <div className="form-container-centerer">
      <img className={styles.mainPlantImage} alt="" src="/group-7125.svg" />
      <div className="form-container">
                    <div className="form-btn">
                      <span className="login-register" onClick={() => {login(); switchMode(); }}>Login</span>
                      <span className="login-register" onClick={() => {register(); switchMode(); } }>Register</span>
  
                      <hr id="Indicator" />
                    </div>
                    <form id="LoginForm" onSubmit={(e) => handleSubmit(e)}>
                      <input name="email" type="text" placeholder="Email" onChange={(e) => handleChange(e)}/>
                      <input name="password" placeholder="Password" onChange={(e) => handleChange(e)} type={showPassword ? "text" : "password"} handleShowPassword={(e) => handleShowPassword(e)}/>
                      <button type="submit" className="btn">Login</button>
                      <div className="google-login-container">
                      <span className="google-login" onClick={() => handleLogin()}><Icon /><p>Google Sign In</p></span>
                      <p className="forgot-pass">Forgot Password</p>
                      {
                        showError(error)
                      }
                      </div>
                    </form>
                    <form id="RegForm" onSubmit={(e) => handleSubmit(e)}>
                      <input name="firstName" type="text" placeholder="First Name" onChange={(e) => handleChange(e)}/>
                      <input name="lastName" type="text" placeholder="Last Name" onChange={(e) => handleChange(e)}/>
                      <input name="email" type="email" placeholder="Email" onChange={(e) => handleChange(e)}/>
                      <input name="password" placeholder="Password"  onChange={(e) => handleChange(e)} type={showPassword ? "text" : "password"} handleShowPassword={() => handleShowPassword()}/>
                      <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={(e) => handleChange(e)}/>
                      {confirmPassword === true && <p style={{color:"red", fontSize:"12px", textAlign:"center"}}>Please confirm your password</p>}

                      <button type="submit" className="btn">Register</button>
                      <span className="google-login" style={{marginLeft: "30px"}}onClick={() => handleLogin()}><Icon /><p>Google Sign In</p></span>
                      {
                        showError(error)
                      }
                    </form>
                </div>
                </div>
      </div>
        
        </div>
    )

    function register(){
        let LoginForm = document.getElementById("LoginForm")
        let RegForm = document.getElementById("RegForm")
        let Indicator = document.getElementById("Indicator")

        RegForm.style.transform = "translateX(1px)";
        LoginForm.style.transform = "translateX(1px)";
        Indicator.style.transform = "translateX(51px)";
    }

    function login(){
        let LoginForm = document.getElementById("LoginForm")
        let RegForm = document.getElementById("RegForm")
        let Indicator = document.getElementById("Indicator")

        RegForm.style.transform = "translateX(345px)";
        LoginForm.style.transform = "translateX(345px)";
        Indicator.style.transform = "translateX(-51px)";
    }
}

export default Login;