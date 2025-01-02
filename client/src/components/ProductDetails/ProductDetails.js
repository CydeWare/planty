import React, { Component, useState, useEffect, useRef } from "react";
import styles from "./ProductDetails.module.css";
import "./ProductDetails.css";
import Navbar from "../Navbar/Navbar.js";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { createCartItem, getCartItems } from "../../actions/cart.js";
import {
  Link,
  useSearchParams,
  useParams,
  useNavigate,
} from "react-router-dom";
import {
  getProducts,
  deleteProduct,
  updateProduct,
  rateProduct,
} from "../../actions/products.js";

const ProductDetails = () => {
    
  const products = useSelector((state) => {
    return state.products;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const params = useParams();
  const id = params.id;

  const product = products.find((product) => {
    return product._id === id;
  });


  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const user = JSON.parse(localStorage.getItem("profile"));

//   useEffect(() => {
//     const productRating = product?.ratings;
//     const id = user?.result?._id ? user?.result?._id : user?.result?.sub;
//     const userRating = productRating?.find((ratingObj) => {
//       return ratingObj?.id === id;
//     });

//     console.log("userRating: " + userRating);

//     if (userRating) {
//       setRating(userRating.rating);
//     }
//   }, [user]);


const images = [];



  function handleCart(e) {
    e.preventDefault();

    const cartItem = {
      selectedFile: product.selectedFile[0],
      title: product.title,
      price: product.price,
      currency: product.currency,
      quantity: quantity,
      shipping_method: product.shipping_method,
      subtotal: product.price * quantity,
    };

    dispatch(
      createCartItem(
        { ...cartItem },
        user?.result?._id ? user?.result?._id : user?.result?.sub
      )
    );
    dispatch(getCartItems());
    navigate("/cart");
  }

  function handleDelete() {
    dispatch(deleteProduct(id));
    navigate("/products");
  }

  const [hasRated, setHasRated] = useState(false);

  const stars = useRef([]);

  useEffect(() => {
    if (rating) {
      let pre = rating;

      while (1 <= pre) {
        if (!stars?.current[pre]?.classList?.contains("is-active")) {
          stars?.current[pre]?.classList?.add("is-active");
        }

        --pre;
      }

      let succ = rating + 1;
      while (5 >= succ) {
        if (stars?.current[succ]?.classList?.contains("is-active")) {
          stars?.current[succ]?.classList?.remove("is-active");
        }

        ++succ;
      }
      setHasRated(true);
    }
  }, [rating]);

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>All Products - Redstore </title>
      <link rel="stylesheet" href="style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
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
        {/* <div className="update-form-container" id="update-form">
                <i className="fa fa-times" onClick={() => closeUpdate()}></i>
                <Form currentId={id}/>
          </div>
          <div className="want-to-delete" id="deletion">
            <i className="fa fa-times" onClick={() => closeDelete()}></i>
            <p>Are you sure you want to delete this?</p>
            <div className="deletion-button-container">
              <span className="deletion-button" onClick={() => handleDelete()}>Yes</span>
              <span className="deletion-button" onClick={() => closeDelete()}>No</span>
            </div>
          </div> */}

        <div className="product-details-container">

        {product ? (
          <div>
            <div className="small-container single-product">
              <div className="row">
                <div className="col-2">
                  <img
                    src={product?.selectedFile[0]}
                    width="100%"
                    id="ProductImg"
                    className="main-product-image"
                  />
                  <div className="small-img-row">
                    <div className="small-img-col">
                      <img
                        src={product?.selectedFile[0]}
                        width="100%"
                        alt=""
                        className="small-img"
                        onClick={() => smallImg0()}
                      />
                    </div>
                    <div className="small-img-col">
                      <img
                        src={product?.selectedFile[1]}
                        width="100%"
                        alt=""
                        className="small-img"
                        onClick={() => smallImg1()}
                      />
                    </div>
                    <div className="small-img-col">
                      <img
                        src={product?.selectedFile[2]}
                        width="100%"
                        alt=""
                        className="small-img"
                        onClick={() => smallImg2()}
                      />
                    </div>
                    <div className="small-img-col">
                      <img
                        src={product?.selectedFile[3]}
                        width="100%"
                        alt=""
                        className="small-img"
                        onClick={() => smallImg3()}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <h3>Home</h3>
                  <p style={{ marginTop: "10px" }}>Seller: {product.name}</p>

                  <h1>{product.title}</h1>
                  <h4>
                    {product.currency === "USD $" ? "$" : product.currency}
                    {product.price * quantity}.00
                  </h4>

                  <div>
                    <select>
                      <option>Select Size</option>
                      <option>XXL</option>
                      <option>XL</option>
                      <option>Large</option>
                      <option>Medium</option>
                      <option>Small</option>
                    </select>
                    <input
                      type="number"
                      value={quantity}
                      id="quantity"
                      onChange={(event) => {
                        return setQuantity(event.target.value);
                      }}
                    />
                    <span className="btn" style={{marginTop: "20px", marginBottom: "10px"}} onClick={(e) => handleCart(e)}>
                      Add To Cart
                    </span>
                  </div>

                  <h3>
                    Product Details <i className="fa fa-indent" style={{color: "#25523b"}} />
                  </h3>
                  <br />
                  <p className="description-container">{product.description}</p>
                  {/* {(user?.result?.sub === product?.creator || user?.result?._id === product?.creator) && (
                    <div className="elipsis-container" onClick={() => updateToggle()}>
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    <div className="update-delete-container">
                        <ul id="update-delete-menu">
                          <li onClick={() => {return update()}}>Edit</li>
                          <li onClick={() => {return openDelete()}}>Delete</li>
                        </ul>
                      </div>
                      
                      
                    </div>
                 )} */}

                   {!user?.result ? (
                    <div
                      className="ratings-wrapper"
                      style={{
                        alignItems: "center",
                        marginTop: "50px",
                        width: "31.5%",
                        marginBottom: "150px"
                      }}
                    >
                      <p
                        style={{
                          border: "2px solid #000",
                          padding: "5px 10px 5px 10px",
                          fontWeight: "525",
                        }}
                      >
                        Sign in to rate this product
                      </p>
                    </div>
                  ) : (
                    <div class="ratings-wrapper">
                      <p style={{ marginBottom: "10px" }}>Rate the product</p>
                      <p class="star-rating">
                      
                      {(() => {
                            let td = [];
                            for (let i = 5; i >= 1; i--) {
                            td.push(<i className={`fa-solid fa-star star-${i}`} data-star={i} ref={(element) => {stars.current[i] = element}} onClick={() => {return handleRate(i)}}></i>);
                            }
                            return td;
                        })()}
                  </p>

                  {hasRated && <p style={{marginTop: "15px", textAlign: "center", color: "#FADA5E"}}>Thanks for your feedback!</p>} 
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* ------- title ------- */}
            <div className="small-container">
              <div className="row row-2">
                <h2 style={{marginRight: "350px"}}>Related Products</h2>
                <p style={{marginTop: "20px", marginLeft: "100px"}}>View More</p>
              </div>
            </div>
            {/* ------- products ------ */}
            <div className="small-container" >
              <div className="row">
                <div className="col-4">
                  <img src="/frame-7199@2x.png" alt="" />
                  <h4>Aloe Vera</h4>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </div>
                  <p>$50.00</p>
                </div>
                <div className="col-4">
                  <img src="/frame-7203@2x.png" alt="" />
                  <h4>Flower Cactus</h4>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-o" aria-hidden="true" />
                  </div>
                  <p>$50.00</p>
                </div>
                <div className="col-4">
                  <img src="/frame-7200@2x.png" alt="" />
                  <h4>Devil's Tongue Plant</h4>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-o" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </div>
                  <p>$50.00</p>
                </div>
                <div className="col-4">
                  <img src="/frame-7201@2x.png" alt="" />
                  <h4>Cool Leaf Plant</h4>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </div>
                  <p>$50.00</p>
                </div>
              </div>
            </div>
            
          </div>
        ) : (
          <div className="circle-container">
            <CircularProgress
              style={{
                marginBottom: "100px",
                marginTop: "80px",
                width: "110px",
                height: "110px",
              }}
            />
          </div>
        )}
        </div>
      </div>
    </div>
  );

  function smallImg0(){
    let ProductImg = document.getElementById("ProductImg");
    let SmallImg = document.getElementsByClassName("small-img"); //an array

    ProductImg.src = SmallImg[0].src;
}

function smallImg1(){
    let ProductImg = document.getElementById("ProductImg");
    let SmallImg = document.getElementsByClassName("small-img"); //an array

    ProductImg.src = SmallImg[1].src
}

function smallImg2(){
    let ProductImg = document.getElementById("ProductImg");
    let SmallImg = document.getElementsByClassName("small-img"); //an array

    ProductImg.src = SmallImg[2].src;
}

function smallImg3(){
    let ProductImg = document.getElementById("ProductImg");
    let SmallImg = document.getElementsByClassName("small-img"); //an array
    
    ProductImg.src = SmallImg[3].src;
}

function updateToggle(){
let updateItems = document.getElementById("update-delete-menu");

if(updateItems.style.maxHeight === "100px"){
  updateItems.style.maxHeight = "0px";
} else{ 
  updateItems.style.maxHeight = "100px";
}
}

function update(){
let updateForm = document.getElementById("update-form");

if(updateForm.style.visibility === "visible"){
  updateForm.style.visibility = "hidden";
  updateForm.style.opacity = "0";
} else {
  updateForm.style.visibility = "visible";
  updateForm.style.opacity = "1";
}
}

function closeUpdate(){
let updateForm = document.getElementById("update-form");

dispatch(getProducts()); //To refresh the product data if closed

updateForm.style.visibility = "hidden";
updateForm.style.opacity = "0";
}

function openDelete(){
let deleteForm = document.getElementById("deletion");

if(deleteForm.style.visibility === "visible"){
  deleteForm.style.visibility = "hidden";
  deleteForm.style.opacity = "0";
} else {
  deleteForm.style.visibility = "visible";
  deleteForm.style.opacity = "1";
}
}

function closeDelete(){
let deleteForm = document.getElementById("deletion");

deleteForm.style.visibility = "hidden";
deleteForm.style.opacity = "0";
}


function handleRate(dataStar){
            //current star
            let cs = dataStar;

            // document.getElementById("output").value = cs;
            console.log("Current star: " + cs)
            
            
            //rate the product
            //cs is end rating
            dispatch(rateProduct(id, cs))
              
            
            setHasRated(true);

            let pre = cs; 

            while(1 <= pre){
                if(!document.querySelector('.star-'+pre).classList.contains('is-active')){
                    document.querySelector('.star-'+pre).classList.add('is-active');
                }

                --pre;
            }


            let succ = cs+1;
            while(5 >= succ){

                if(document.querySelector('.star-'+succ).classList.contains('is-active')){
                    document.querySelector('.star-'+succ).classList.remove('is-active');
                }

                ++succ;
            }
    }
};

export default ProductDetails;
