import React from "react";
import comment from '../images/comment-regular.svg';
import share from '../images/share2.png';
 import like from '../images/like.png';
import abstract3 from '../images/abstract3d.jpeg';
import order_logo from '../images/Max-R.jpg';

import tete from '../images/tehe-earth.webp';
import bubble from '../images/bubbles-background.jpg'
import train from '../images/train-bg.png';


const menuItem=[
        {
            path:abstract3,
            logo:order_logo,
            name:"Thomas Edward",
            
        },
        {
            path:tete,
            logo:order_logo,
            name:"Chris Evan",
            
        },
        {
            path:bubble,
            logo:order_logo,
            name:"Emile Jones",
            
        },
        {
            path:train,
            logo:order_logo,
            name:"Jessica Williams",
            
        }

    ];

function GridBox(){
    return(
        menuItem.map((item)=>{
          return(
            <div className="box-container">
            <div className="box-body">
                <div className="box-logo row">
                  <div className="col-sm-2 ">
                    <img src={item.logo} alt="logo" width={"99px"} />
                  </div>
                 <div className="col-sm-6 span_name_div">
                 <p className="span_name">{item.name} </p>
                  <p> #thewarrior</p>
                 </div>
                </div>
                <br/>
                <div className="box-text">
                      It is a longest established fact that a reader will be distracted by the reading content of page when looking at its layout .<span className="text-danger">Read more</span>
                </div>
                <div className="box-image">
                  <img src={item.path} alt="jvdj" />
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="box-bottom-logo">
                  <h3><img src={like} width={"30px"} alt="comment"/> 9.8K &emsp;	<img src={comment} width={"30px"} alt="comment"/> 8.6K &emsp; <img src={share} width={"30px"} alt="SHARE"/> 7.2K</h3>
                </div>
            </div>
        </div>
          )
        })
    )
}

export default GridBox;