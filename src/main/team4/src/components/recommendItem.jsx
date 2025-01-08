import React from "react";
import './recommendItem.css'
import axios from "axios";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import Detail from "../views/Recommend/Detail/detail";

function RecommendItem(props) {
    const navigate = useNavigate()
    // console.log(props.write_datetime)
    return(
        <div className='recommend-main-travel-info'>
            <div className="recommend-main-travel-img">
                <a href=""><img className="recommend-travel-img"
                src={props.image_url}
                alt="" onClick={() => {
                    navigate(`/recommend/${props.board_number}`)
                }}/></a>
            </div>
            <div className='recommend-main-travel-title'>{props.recommend_title}</div>
            <div className='recommend-main-travel-user'>
                이름
            </div>
            <div className='recommend-travel-area-date'>
                <div className='recommend-travel-area'>{props.location}</div>
                <div className='recommend-travel-date'>{props.write_datetime}</div>
            </div>
        </div>
    )
}

export default RecommendItem