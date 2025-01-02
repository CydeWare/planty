import React, { useState } from 'react';
import styles from "./Contact.module.css";
import Navbar from "../Navbar/Navbar.js";
import "./Contact.css";

const Contact = () => {

    return (
        <div>
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
      
      <Navbar />
        <section className="all-contact-us-container">
      <div className="small-container contact-container">
            <h1>Contact Us</h1>
            <hr className="line" />
          </div>
          <section className="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.794625742212!2d0.03126567594276563!3d51.53532660866358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7c7925b84c7%3A0x7f90b5df104ff590!2sInnovative%20College%20London!5e0!3m2!1sen!2sid!4v1683376587238!5m2!1sen!2sid" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </section>
          <section className="contact-us">
            <div className="row">
              <div className="contact-col">
                <div>
                  <i className="fa fa-home" aria-hidden="true" />
                  <span>
                    <h5>Australia, Planty Shop</h5>
                    <p>Melbourne den 3000, 121 King St</p>
                  </span>
                </div>
                <div>
                  <i className="fa fa-phone" aria-hidden="true" />
                  <span>
                    <h5>+91 999999999</h5>
                    <p>Monday to Saturday, 10AM to 6PM</p>
                  </span>
                </div>
                <div>
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                  <span>
                    <h5>Info@example.com</h5>
                    <p>Email Us your query</p>
                  </span>
                </div>
              </div>
              <div className="contact-col">
                <form>
                  <input type="text" name="name" placeholder="Enter your name" id="name" required />
                  <input type="email" name="email" placeholder="Enter your email address" id="email" required />
                  <input type="text" name="subject" placeholder="Enter your subject" id="subject" required />
                  <textarea rows={8} name="message" placeholder="Message" id="message" required defaultValue={""} />
                  <button type="submit" className="btn">Send Message</button>
                </form>
                {/* -------- Email Autoresponder Functionality ---------- */}
              </div>
            </div>
          </section>
          </section>
      </div>
      

      


        </div>
    )
}

export default Contact;