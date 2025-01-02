import React from 'react';
import "./Slide.css";


const Slide = ({img, title, description}) => {

    return (
        <div class="row">
                <div class="col-2">
                  <img
                    alt=""
                    src={img}
                    class="photo"
                  />
                </div>
                <div class="col-2">
                  <div>
                    <p class="loremIpsumDolor9">
                      {title}
                    </p>
                    <p

                    > {description}
                    
                     </p>
                  </div>
    
                  <div class="btn-container">
                    <span class="btn">Get More Information</span>
                  </div> 
                </div>
              </div>
    )
}

export default Slide;