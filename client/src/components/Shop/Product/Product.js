import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Shop.module.css";
import "../Shop.css";
// import "../Plantshop.css"

const Product = ({ product }) => {

  const { _id } = product;
  const { ratings } = product; 

  const [numberRating, setNumberRating] = useState(0);

    let numberOfRating = 0;

    useEffect(() => {
      if(ratings.length > 1){

          ratings.map((obj) => {
              numberOfRating = numberOfRating + obj.rating;

          }) 

          let afterRating = numberOfRating / ratings.length;

          let resultRating = Math.round(afterRating*2)/2; //Rounding to 0.5
          setNumberRating(resultRating);
          //obj consist of id and rating

      }else
      {

          if(ratings.length > 0){
              setNumberRating(ratings[0].rating)
          }

      }

  }, [ratings])

  return (
    <div className="col-4">
      <div className={styles.imageTextContainer}>
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

        <Link to={`/product-details/${_id}`}><div className="img-storage">
        <img
          // className={styles.plantShopChild}
          alt=""
          src={product.selectedFile[0]}
        />
        </div></Link>
        <Link to={`/product-details/${_id}`} style={{textDecoration: "none", color: "#25523b"}}><div className={styles.loremIpsumDolor1}>{product.title}</div></Link>
        {/* <img className={styles.starRating} alt="" src="/group-7129.svg" /> */}
        <div>
        {numberRating ? 
                    <div className={styles.starRating}>
                        
                        {(() => {
                            let td = [];
                            for (let i = 0; i < (Math.floor(numberRating)); i++) {
                            td.push(<i className="fa fa-star" key={i}></i>);
                            }
                            return td;
                        })()}

                        {
                            numberRating % 1 !== 0 && <i class="fa fa-star-half-o"></i>
                        }

                        {(() => {
                            let td = [];
                            for (let i = 0; i < (5 - Math.ceil(numberRating)); i++) {
                            td.push(<i className="fa fa-star-o"></i>);
                            }
                            return td;
                        })()}
                        
                    </div>
                     :
                     <div className={styles.starRating}>
                     <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                    </div>
                }
        </div>
        <div className={styles.priceContainer}>
          <p className={styles.div7}>$ {product.price}</p>
          <p className={styles.div8}>
            $ {product.price - (10 / 100) * product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
