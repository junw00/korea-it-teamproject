import React, { useEffect, useRef, useState } from "react";
import Header from "../../../layout/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart } from "@fortawesome/free-regular-svg-icons";
import CommentSection from "../../../components/commentBox/comment-box";
import Comment from "../../../components/comment/comment";
import { useParams } from "react-router-dom";
import './detail.css'
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
import { isEqual, parse } from "date-fns";


export default function Detail() {
    const [heartColor, setHeartColor] = useState(false);
    const [recommendData, setRecommendData] = useState({ key: '' })
    const {id} = useParams()
    // console.log(id)
    
    
    const [commentArr, setCommentArr] = useState([])
    // 댓글 리스트 가져오기
    useEffect(() => {
        axios.get(`/recommend/${id}/comment-list`)
            .then((response) => {
                const comments = response.data.data;
                setCommentArr(comments);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [commentArr])



    // 게시글 조회
    useEffect(() => {
        axios.get(`/recommend/${id}`)
        .then((response) => {
            let recommend = response.data.data;
            setRecommendData(recommend)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])
    

    // 좋아요 버튼 클릭 event
    function onClickHeart() {
        setHeartColor(!heartColor)
    }
    return(
        <>
        <div className="detail-container">
            <Header></Header>
            
            <div className="detail-box">
                <div className="detail-location">{recommendData.location}</div>
                <div className="detail-title">{recommendData.recommend_title}</div>
                <div className="detail-info">
                    <div className="detail-name"><span>name</span></div>
                    <div className="detail-date"><span>{String(recommendData.write_datetime).split("T")[0]}</span></div>
                    <div className="detail-view-count"><span>조회수: {recommendData.view_count}</span></div>
                </div>
                <div className="detail-content" dangerouslySetInnerHTML={{ __html: recommendData.recommend_content}}></div>
                <div className="btn-box">
                    <div className="like-btn-box"><button className="like-btn" onClick={onClickHeart}><span><FontAwesomeIcon icon={faHeart} className="heart-icon" style={heartColor ? {color: 'red'} : {color: "black"}}/></span>좋아요  0</button></div>
                    <div className="comment-btn-box"><button className="comment-btn"><span><FontAwesomeIcon icon={faCommentDots} className="comment-icon"/></span>댓글 {commentArr.length}</button></div>
                </div>

                <div className="comment-section-box">
                    <div className="comment-section-top-box">
                        <span className="comment-section-top">댓글</span>
                    </div>
                    {commentArr.map((comment) => {
                        return (
                            <Comment {...comment} board_number={id} />
                        )
                    })}
                    <CommentSection board_number={id} />
                </div>
            </div>
        </div>
        </>
    )
}