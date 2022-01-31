import React from "react";
import Navlogo from "../img/navlogo.png";
import Home1 from "../img/home1.jpg";
import Home2 from "../img/home2.jpg";
import Home3 from "../img/home3.jpg";
import Home4 from "../img/home4.jpg";
import Home5 from "../img/home5.jpg";
import Home6 from "../img/home6.jpg";

const box=()=>{
    return(
        <>
        <div className="box-4">
            <h5>GET STARTED WITH EXPLORING REAL ESTATE OPTIONS</h5>
                <div className="box-4-content">
                    <div className="img-detail">
                        <img src={Home1}></img>
                        <p> Buying a Home</p>
                    </div>
                    <div className="img-detail">
                        <img src={Home2}></img>
                        <p> Renting a Home</p>
                    </div>
                    <div className="img-detail">
                        <img src={Home3}></img>
                        <p> Sell/Rent your property</p>
                    </div>
                    <div className="img-detail">
                        <img src={Home4}></img>
                        <p> PG and Co-living</p>
                    </div>
                    <div className="img-detail">
                        <img src={Home5}></img>
                        <p> Buying Commercial Spaces</p>
                    </div>
                    <div className="img-detail">
                        <img src={Home6}></img>
                        <p> Lease Commercial Spaces</p>
                    </div>
                </div>
        </div>
        </>
    );
}
export default box;