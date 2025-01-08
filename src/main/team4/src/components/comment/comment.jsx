import React, { useEffect, useRef, useState } from "react";
import './comment.css'
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default function Comment(props) {
    const commentRef = useRef(null);
    const commentBoxRef = useRef(null);
    const [dotBtn, setDotBtn] = useState(false)

    // console.log(props)

    useEffect(() => {
        if(commentRef.current) {
            const commentHeight = commentRef.current.offsetHeight;
            commentBoxRef.current.style.height = 'auto';
            commentBoxRef.current.style.height = commentHeight + 30 + 'px';
        }
    })

    return(
        <div className="comment-box" ref={commentBoxRef}>
            <li className="comment-info">
                <div className="comment-user-info">
                    <div className="user-image-box"><img src="https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png?type=c77_77" alt="" /></div>
                </div>
                <div className="user-comment-box">
                    <div className="user-comment" ref={commentRef}>
                        <div className="user-name">
                            {props.user_name}
                            <button className="dot-btn" onClick={() => {
                                setDotBtn(!dotBtn)
                            }}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                            {
                            dotBtn === true ? 
                                <div className="comment-update-delete-box">
                                    <ul className="comment-update-delete">
                                        <li className="comment-update">수정</li>
                                        <li className="comment-delete">삭제</li>
                                    </ul>
                                </div>
                            : ""
                            }
                        </div>
                        <div className="comment">
                            {JSON.parse(props.contents)}
                        </div>
                        <div className="comment-date"><span>{String(props.write_datetime).split("T")[0]}</span></div>
                        
                    </div>
                </div>
            </li>
        </div>
    )
}