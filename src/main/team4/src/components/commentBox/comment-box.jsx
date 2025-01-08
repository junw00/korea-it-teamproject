import React, { useEffect, useRef, useState } from "react";
import './comment-box.css'
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CommentSection(props) {
    const textareaRef = useRef(null)
    const [comment, setComment] = useState("")
    const [commentArr, setCommentArr] = useState([])

    // useEffect(() => {
    //     axios.get(`/recommend/${props.board_number}/comment-list`)
    //         .then((response) => {
    //             console.log(response.data.data)
    //             const comments = JSON.parse(response.data.data)
    //             console.log(comments)
    //         })   
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [comment])

    // 댓글 작성
    function onClickUploadComment() {
        if (comment.trim().length === 0) {
            alert("댓글을 입력해주세요")
        }else {
            axios.post(`/recommend/${props.board_number}/comment`, comment, {headers: {
                'Content-Type': 'application/json; charset=UTF-8'
                },
            })
            .then((response) => {
                if (response.data.data) {
                    setComment("")
                    alert("댓글 작성완료")
                    // axios.get(`/recommend/${props.board_number}/comment-list`)
                    //     .then((response) => {
                    //         const comments = response.data.data;
                    //         setComment(comments)
                    //     })   
                    //     .catch((error) => {
                    //         console.log(error)
                    //     })
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }

    function onChangeComment(e) {
        setComment(e.target.value)
    }

    // textarea 모든 글자 보이게 하기
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }, [comment]);

    return(
        <>
            <div className="comment-main-box">
                <div className="writer">이름<span>{comment.length} / 3000</span></div>
                <div className="textarea-box">
                    <textarea className="comment-textarea" name="" id="" rows="1" cols="80" value={comment} placeholder="댓글을 남겨주세요" ref={textareaRef} onChange={onChangeComment}>
                    </textarea>
                </div>
                <div className="comment-upload-btn-box">
                    <button className='comment-upload' onClick={onClickUploadComment} style={comment.length > 0 ? {backgroundColor: '#d4fafa', color: '#318bcb'} : {backgroundColor: 'white' ,color: '#b4b4b4'}}>등록</button>
                </div>
            </div>
        </>
    )
}