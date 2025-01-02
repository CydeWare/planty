import React, { useState, useRef, useEffect } from "react";
import styles from "./About.module.css";
import Navbar from "../Navbar/Navbar.js";
import "./About.css";
import Slide from "../Slide/Slide";

const About = () => {
    const slides = [
      { img: "/Plant-in-a-pot.png", title: "What are plants?", description: "A plant is defined as a living thing that grows on the earth. The parts of the plant include a stem, leaves, and roots. The plant provides food, fibre, shelter, medicine, and fuel. Let us understand what are plants in more detail. Green plants produce energy for all organisms. They produce oxygen that helps us in the process of breathing and is essential for the survival of life. The different types of plants for kids are herbs, shrubs, trees, climbers, and creepers. In this article, we are going to learn about what are plants for kids and more information on plants for kids." },
      { img: "/planting-tree.jpg", title: "Why do we plant?", description: "Trees offer many environmental benefits.Trees reduce the urban heat island effect through evaporative cooling and reducing the amount of sunlight that reaches parking lots and buildings. This is especially true in areas with large impervious surfaces, such as parking lots of stores and industrial complexes. Trees improve our air quality by filtering harmful dust and pollutants such as ozone, carbon monoxide, and sulfur dioxide from the air we breathe. Trees give off oxygen that we need to breathe. Trees reduce the amount of storm water runoff, which reduces erosion and pollution in our waterways and may reduce the effects of flooding. Many species of wildlife depend on trees for habitat. Trees provide food, protection, and homes for many birds and mammals."},
      { img: "/planting-tree2.jpg", title: "How do we plant?", description: "Place the plant in the hole and plant deep enough that the top of the root ball is about one inch above the surrounding soil. Then, back fill by adding the amended soil around the root ball. As you add soil, press the soil down to collapse any large air pockets in the soil. Plants are autotrophs, which means they produce their own food. They use the process of photosynthesis to transform water, sunlight, and carbon dioxide into oxygen, and simple sugars that the plant uses as fuel. All plants need space to grow, the right temperature, light, water, air, nutrients, and time."},
      { img: "/earth.jpg", title: "Where do we plant?", description: "Locations with 8-10 hours of direct sunlight each day are ideal for most vegetables. The more sun exposure the better. Watering and Water Sources: The location of your garden or planting containers should be near a clean water source to make watering convenient and easy. You will need room for your plants to grow and plenty of sunlight and direct light. A sunny spot is good to grow flowers and vegetables. Understand the light requirements of different types of plants and place them accordingly."}
      // { url: "https://picsum.photos/seed/img4/600/400", title: "city" },
      // { url: "https://picsum.photos/seed/img5/600/400", title: "italy" },
    ];

    useEffect(() => {

      const myInterval = setInterval(() => next(), 8500);
      // clearInterval(myInterval);
      // let i = 0;
      // while(i < 10){
        
      //   if(i < 4){
      //     setTimeout(() => next(), 1000);
      //     i++;
      //   } else{
      //     setTimeout(() => prev(), 1000);
      //     i = 0;

      //   }
      // }
    }, [])
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
        <div className="about-container">
          {/* <div className="row">
            <div className="col-2">
              <img
                className={styles.plantShopChild11}
                alt=""
                src="/people-plant-trees.jpg"
              />
            </div>
            <div className="col-2">
              <div className={styles.frameParent}>
                <p className={styles.loremIpsumDolor9}>
                  How Do We Plant Them?
                </p>
                <p
                  className={styles.loremIpsumDolor10}
                >{` The trunk flare is where the trunk expands at the base of the tree. Ensure trunk flare is partially visible after the tree is planted. Remove excess soil prior to planting if flare is not visible. 

                 Dig a shallow, broad planting hole. Holes should be 2-3 times wider than the root ball, but only as deep as the root ball.
                
                 `}</p>
              </div>

              <div className="btn-container">
                <span className="btn">Get More Information</span>
              </div> 
            </div>
          </div>*/}
          <section class="slider-wrapper">
        <button class="slide-arrow" id="slide-arrow-prev" onClick={() => prev()}>
          &#8249;
        </button>
        <button class="slide-arrow" id="slide-arrow-next" onClick={() => next()}>
          &#8250;
        </button>
        <ul class="slides-container" id="slides-container">
          {/* <li class="slide">

            
          </li>
          <li class="slide"></li>
          <li class="slide"></li>
          <li class="slide"></li> */}
          {slides.map((slide) => {
            return (
              <li className="slide">
                <Slide img={slide.img} title={slide.title} description={slide.description}/>
              </li>
            )
          })}
        </ul>
      </section>
        </div>
      </div>
    </div>
  );

  
function next(){
  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");

  if(slide && slidesContainer){
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  }

}

function prev(){
  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");

  if(slide && slidesContainer){
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  }


}

};

export default About;
