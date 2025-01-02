import React, { Component, useState, useEffect } from "react";
import styles from "./Shop.module.css";
// import "../Plantshop.css"
import Navbar from "../Navbar/Navbar.js";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/products.js";
import { CircularProgress } from "@material-ui/core";
import Product from "./Product/Product";

const Shop = () => {
  const products = useSelector((state) => {
    return state.products;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);

  // ALSO Make Latest Products Too If You Can

  return (
    <div >
      <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>All Products - Redstore </title>
          <link rel="stylesheet" href="style.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
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
        <div className={styles.shopTitle}>
          <b className={styles.shopByCategory}>Shop By Category</b>
          <div className={styles.newArrivalsParentCenterer}>
            <div className={styles.newArrivalsParent}>
              <div className={styles.newArrivals}>New Arrivals</div>
              <div className={styles.bestSellers}>Best Sellers</div>
              <div className={styles.ceiling}>Ceiling</div>
              <div className={styles.wall}>Wall</div>
              <div className={styles.pot}>Pot</div>
              <div className={styles.vase}>Vase</div>
            </div>
          </div>
        </div>
        <div className={styles.imageContainerCenterer}>
          <div className={styles.row}>
            {/* <div className={styles.imageTextContainer}>
              <img
                className={styles.plantShopChild}
                alt=""
                src="/frame-7199@2x.png"
              />
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet
              </div>
              <img className={styles.starRating} alt="" src="/group-7129.svg" />
              <div className={styles.priceContainer}>
                <p className={styles.div7}>$ 320</p>
                <p className={styles.div8}>$ 280</p>
              </div>
            </div>
            <div className={styles.imageTextContainer}>
              <img
                className={styles.plantShopChild}
                alt=""
                src="/frame-7203@2x.png"
              />
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet
              </div>
              <img className={styles.starRating} alt="" src="/group-7129.svg" />
              <div className={styles.priceContainer}>
                <p className={styles.div7}>$ 320</p>
                <p className={styles.div8}>$ 280</p>
              </div>
            </div>
            <div className={styles.imageTextContainer}>
              <img
                className={styles.plantShopChild}
                alt=""
                src="/frame-7200@2x.png"
              />
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet
              </div>
              <img className={styles.starRating} alt="" src="/group-7129.svg" />
              <div className={styles.priceContainer}>
                <p className={styles.div7}>$ 320</p>
                <p className={styles.div8}>$ 280</p>
              </div>
            </div>
            <div className={styles.imageTextContainer}>
              <img
                className={styles.plantShopChild}
                alt=""
                src="/frame-7204@2x.png"
              />
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet
              </div>
              <img className={styles.starRating} alt="" src="/group-7129.svg" />
              <div className={styles.priceContainer}>
                <p className={styles.div7}>$ 320</p>
                <p className={styles.div8}>$ 280</p>
              </div>
            </div>
            <div className={styles.imageTextContainer}>
              <img
                className={styles.plantShopChild}
                alt=""
                src="/frame-7201@2x.png"
              />
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet
              </div>
              <img className={styles.starRating} alt="" src="/group-7129.svg" />
              <div className={styles.priceContainer}>
                <p className={styles.div7}>$ 320</p>
                <p className={styles.div8}>$ 280</p>
              </div>
            </div>
            <div className={styles.imageTextContainer}>
              <img
                className={styles.plantShopChild}
                alt=""
                src="/frame-7205@2x.png"
              />
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet
              </div>
              <img className={styles.starRating} alt="" src="/group-7129.svg" />
              <div className={styles.priceContainer}>
                <p className={styles.div7}>$ 320</p>
                <p className={styles.div8}>$ 280</p>
              </div>
            </div>
            <div className={styles.imageTextContainer}>
              <img
                className={styles.plantShopChild}
                alt=""
                src="/frame-7202@2x.png"
              />
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet
              </div>
              <img className={styles.starRating} alt="" src="/group-7129.svg" />
              <div className={styles.priceContainer}>
                <p className={styles.div7}>$ 320</p>
                <p className={styles.div8}>$ 280</p>
              </div>
            </div>
            <div className={styles.imageTextContainer}>
              <img
                className={styles.plantShopChild}
                alt=""
                src="/frame-7203@2x.png"
              />
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet
              </div>
              <img className={styles.starRating} alt="" src="/group-7129.svg" />
              <div className={styles.priceContainer}>
                <p className={styles.div7}>$ 320</p>
                <p className={styles.div8}>$ 280</p>
              </div>
            </div> */}

            {!products.length ? <CircularProgress style={{marginBottom: "100px", marginTop: "50px"}}/> : products.map((product) => {
                return (<Product product={product} />)
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
