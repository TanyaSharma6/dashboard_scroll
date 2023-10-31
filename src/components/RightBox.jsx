import React from "react";
import abstract3 from '../images/abstract3d.jpeg';
import tete from '../images/tehe-earth.webp';
import bubble from '../images/bubbles-background.jpg'
import train from '../images/train-bg.png';
import human1 from '../images/human1.jpg';
import human2 from '../images/human2.jpg';
import human4 from '../images/human4.jpg';
import human3 from '../images/nature-walk.png'

const menuItem=[
        {
            path:abstract3,
            logo:human1,
            name:"Thomas Edward",
            
        },
        {
            path:tete,
            logo:human2,
            name:"Chris Evan",
            
        },
        {
            path:bubble,
            logo:human3,
            name:"Emile Jones",
            
        },
        {
            path:train,
            logo:human4,
            name:"Jessica Williams",
            
        }

    ];

function RightBox(){
    return (
        menuItem.map((item)=>{
          return(
              <div className="box-container2 right-box" style={{ 
                backgroundImage: `url(${item.path})` }}>
          <div className="box-body">
              <div className="box-image2 row">
                  <div className="box-img-div col-sm-4">
                    <img src={item.logo} alt="jvdj" />
                    <span class="dot"></span>
                  </div>
                  <div className="box-text-div col-sm-6">
                     <h6>{item.name}</h6>
                     <small>#thewildwithyou</small>
                  </div>
                </div>
               
            </div>
        </div>
          )
        })
         
    );
}

export default RightBox;
