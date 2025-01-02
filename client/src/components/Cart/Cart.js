import React, { Component, useState, useEffect } from "react";
import styles from "./Cart.module.css";
// import "../Plantshop.css"
import Navbar from "../Navbar/Navbar.js";
import "./Cart.css";
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, deleteCartItem, updateCartItem } from '../../actions/cart.js';
import CartItem from "./CartItem/CartItem.js"
import { CircularProgress } from '@material-ui/core'
import { Link, useNavigate, useLocation } from "react-router-dom";

const Cart = () => {

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"))

  const allCartItems = useSelector((state) => { return state.cart });

  const cartItems = allCartItems.filter((cartItem) => {
    const id = user?.result?._id ? user?.result?._id : user?.result?.sub;
    return cartItem.userId === id;
  })

  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    dispatch(getCartItems());
  }, [])



    //For adding the subtotal
    let total = 0;

    useEffect(() => {
    
      cartItems?.map((cartItem) => {
        total = total + cartItem.subtotal;
        setSubtotal(total);
    })
      
      
    }, [cartItems])

  return (
    <div>
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
          {/* <img className={styles.plantShopChild} alt="" src="/group-7125.svg" /> */}
          <Navbar />
          <div className="small-container cart-page">
            <div className="update-form-storage" id="checkout-form-storage">
              <div className="update-form-container" id="checkout-form" style={{width: "800px"}}>
                    <i className="fa fa-times" onClick={() => closeCheckout()}></i>
                    {/* { <Checkout subtotal={subtotal} tax={(5/100 * subtotal)} total={((subtotal + (5/100 * subtotal)) + 10)} shipping={10} cartItems={cartItems}/> } */}
              </div>
            </div>
            <table>
              <tbody><tr className="table-contents">
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
                {user?.result  ? ( cartItems?.length ? 
          
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem}/>
          }) 
          : 
          <div style={{marginTop: "50px", marginBottom: "70px", display: "flex", flexDirection: "column"}}>
          <h1>No products are added to your cart</h1>
          <Link to="/products"><span className="btn">Buy Something</span></Link>
          </div> )
                
            : <div className="sign-in-warning-container" style={{marginTop: "50px", marginBottom: "70px", display: "flex", flexDirection: "column"}}>
            <p className="sign-in-warning" style={{fontSize: "24px"}}>Please Sign In to Add Products To Your Cart!</p>
            <Link to="/login"><span style={{fontSize: "20px", padding: "10px 20px 10px 20px"}}className="btn">Sign In</span></Link>
            </div>

              
                }
{/* 
                {
                  cartItems.map((cartItem) => {
                    return <CartItem key={cartItem.id} cartItem={cartItem}/>
                  }) 
                } */}
                {/* <td>
                    <div class="cart-info">
                        <img src="/frame-7199@2x.png" alt="" />
                        <div>
                            <p>Red Printed T-shirt</p>
                            <small>Price: $50.00</small>
                            <br />
                            <a href="">Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="1"/></td>
                <td>$50.00</td> */}

                {/* <CircularProgress style={{marginBottom: "100px", marginTop: "80px", width: "110px", height: "110px"}}/> */}
              </tbody></table>
            <div className="total-price">
              <table>
                <tbody><tr>
                    <td>Subtotal</td>
                    
                    <td>${!cartItems?.length ? 0 : subtotal}.00</td>
                    {/* {cartItems[0].currency === "USD $" ? "$" : cartItems[0].currency} */}
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td>${(!cartItems?.length ? 0 : (5/100 * subtotal)) % 1 !== 0 ? `${(!cartItems?.length ? 0 : (5/100 * subtotal))}0` : `${(!cartItems?.length ? 0 : (5/100 * subtotal))}.00`}</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>${!cartItems?.length ? 0 : 10}.00</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>${(!cartItems?.length ? 0 : (subtotal + (5/100 * subtotal) + 10)) % 1 !== 0 ? `${(!cartItems?.length ? 0 : (subtotal + (5/100 * subtotal) + 10))}0` : `${(!cartItems?.length ? 0 : (subtotal + (5/100 * subtotal) + 10))}.00`}</td>
                  </tr>
                  <tr>
                    <span className="btn" onClick={() => {return checkout()}}>Buy All</span>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  function checkout(){
    let updateForm = document.getElementById("checkout-form");
    let containerForm = document.getElementById("checkout-form-storage");

    if(containerForm.style.visibility === "visible"){
      updateForm.style.visibility = "hidden";
      updateForm.style.opacity = "0";
      containerForm.style.visibility = "hidden";
      containerForm.style.opacity = "0";
    } else {
      updateForm.style.visibility = "visible";
      updateForm.style.opacity = "1";
      containerForm.style.visibility = "visible";
      containerForm.style.opacity = "1";
    }
  }
  
  function closeCheckout(){
    let updateForm = document.getElementById("checkout-form");
    let containerForm = document.getElementById("checkout-form-storage");

    dispatch(getCartItems()); //To refresh the product data if closed

    updateForm.style.visibility = "hidden";
    updateForm.style.opacity = "0";
    containerForm.style.visibility = "hidden";
    containerForm.style.opacity = "0";
  }
};

export default Cart;
