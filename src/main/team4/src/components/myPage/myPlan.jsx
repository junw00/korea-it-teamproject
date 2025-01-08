import React, { useState } from "react";
import './myPlan.css'


export default function MyPlan() {

    return(
        <div className="myplan-container">
            <div className="myplan-location-img-box">
                <img className="area-img" src="/image/location1.jpg" alt="" />
            </div>
            <div className="myplan-info-box">
                <div className="myplan-location-name">제주</div>
                <div className="myplan-date">
                    2023-12-19 ~ 2023-12-21
                </div>
            </div>
        </div>
    )
}