import React, { useState } from 'react';
import styles from "./Blog.module.css";
import Navbar from "../Navbar/Navbar.js";
import "./Blog.css";


const Blog = () => {

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
        <section className="blog-container">
        <div className="small-container contact-container">
            <h1>Blog</h1>
            <hr className="line" />
          </div>
        <section className="blog-content">
        
  <div className="row">
    <div className="blog-left">
      <img src="/planting-tree.jpg" />
      <h2>Our Online Programs For Planting Trees in 2023!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus
        ipsum, congue ut finibus quis, pretium ut urna. Suspendisse elementum
        pulvinar placerat. Aliquam eget gravida nulla. Donec convallis, justo et
        vulputate scelerisque, dui neque fermentum urna, pharetra venenatis
        nulla diam id mi. Nulla ullamcorper diam urna, ut varius urna tincidunt
        id. Suspendisse faucibus, nisi non dictum interdum, massa ante semper
        felis, id iaculis nisl metus id sem.{" "}
      </p>
      <br />
      <p>
        Etiam ullamcorper scelerisque dui, at porta neque tempus ut. Phasellus
        non laoreet nunc. Duis eget hendrerit eros. Quisque semper risus mauris,
        at feugiat augue lacinia ac. Mauris iaculis consequat lacus. Proin
        accumsan tortor quis elit placerat ullamcorper eu a velit. Duis
        condimentum consequat sollicitudin. Duis luctus vulputate elementum.
        Nulla ac massa tincidunt, vulputate sem quis, luctus orci. Nam aliquam
        sodales blandit. Fusce commodo erat molestie elit maximus placerat.
      </p>
      <br />
      <p>
        Pellentesque a urna rutrum, euismod lorem id, hendrerit nulla. Integer
        vulputate non tortor ac auctor. Aliquam erat volutpat. Donec tincidunt
        dolor quis dignissim hendrerit. Sed dictum neque velit, sed ullamcorper
        dui accumsan sit amet. Nunc faucibus, nibh id lacinia porttitor, arcu
        elit molestie diam, vitae consectetur justo nunc nec felis. Sed et
        turpis lobortis, volutpat nulla a, hendrerit tellus.
      </p>
      <br />
      <p>
        Nulla facilisi. Maecenas vel aliquam enim. Etiam sed quam consequat,
        dictum lorem non, efficitur leo. Sed iaculis at ipsum ac sodales. Sed
        pulvinar efficitur quam eu imperdiet. Donec porttitor nisl mi, vitae
        aliquet eros faucibus ac. Morbi consectetur diam finibus risus eleifend,
        quis rhoncus enim sollicitudin. Duis sit amet eleifend tellus. Nam
        ultrices eget risus eu sodales. Pellentesque aliquet arcu dui, non
        bibendum velit porttitor at. Aliquam eu lectus maximus urna viverra
        ornare non non massa. Vivamus sollicitudin vel nisi ut ullamcorper.
      </p>
      <div className="comment-box">
        <h3>Leave a comment</h3>
        <form className="comment-form">
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <textarea rows={5} placeholder="Your comment" defaultValue={""} />
          <button type="submit" className="btn">
            POST COMMENT
          </button>
        </form>
      </div>
    </div>
    <div className="blog-right">
      <h3>Post Categories</h3>
      <div>
        <span>Planting Trees</span>
        <span>28</span>
      </div>
      <div>
        <span>Notch Planting</span>
        <span>34</span>
      </div>
      <div>
        <span>Deep Planting</span>
        <span>21</span>
      </div>
      <div>
        <span>Stump Planting</span>
        <span>15</span>
      </div>
      <div>
        <span>Environment Care</span>
        <span>32</span>
      </div>
      <div>
        <span>Stop Pollution</span>
        <span>48</span>
      </div>
    </div>
  </div>
</section>


        </section>

      </div>

        </div>
    )

}

export default Blog;