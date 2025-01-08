// App.jsx / App.tsx

import React, { Component, useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import  ClassicEditor  from '@ckeditor/ckeditor5-build-classic/';
import './writeEditor.css'
import Header from '../../../layout/Header';
import axios from 'axios';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../layout/Footer';
import { useSelector } from 'react-redux';



const Editor = () => {
        const [title, setTitle] = useState("");
        const [content, setContent] = useState("");
        const [checkPost, setCheckPost] = useState(false)
        let [location, setLocation] = useState("지역");
        const state = useSelector(state => {return state})
        let locationRef = useRef(location)
        // select option 태그 크기 조절
        const locationArr = ['지역', '서울', '부산', '제주', '경주',
                        '강릉', '여수', '거제통영', '남원', '전주',
                        '포항', '인천', '춘천', '대전', '목포', '군산',
                        '안동', '울릉도', '가평', '제천', '수원', '영월']

        const navigate = useNavigate();

        const titleRef = useRef(title);
        const contentRef = useRef(content);

        function onChangeRecommendTitle(e) {
            setTitle(e.target.value)
        }

        function onClickRecommendUploadBtn() {
            // navigate('/recommend')
            if(title.trim().length === 0 || content.trim().length === 0 || location === "지역") {
                alert("제목, 내용, 지역을 입력해주세요")
            }else{
                axios.post("/recommend/write", {
                    recommend_title: title,
                    recommend_content: content,
                    location: location
                }, {
                    headers : `Bearer ${state.auth.token}`
                })
                .then((response) => {
                    if (response.data) {
                        alert("작성 완료")
                        navigate('/recommend')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
                }
        }
        return (
            <>
            <div className='ckeditor-container'>
                <Header></Header>
                <div className='ckeditor'>
                    <div className='top-banner-box'>
                        <div className='top-banner'>
                            <div className='banner-left'>여행 후기</div>
                            <button className='upload' onClick={onClickRecommendUploadBtn}>등록</button>
                        </div>
                        <div className='title-box'>
                            <Navbar variant="dark" bg="dark" expand="lg" color='black' className='navbar'>
                                    <Nav>
                                        <NavDropdown title={location} location={location}>
                                            {locationArr.map((location, i) => {
                                                return(
                                                    <NavDropdown.Item title={location} onClick={() => {
                                                        setLocation(location)
                                                    }}>{location}</NavDropdown.Item>
                                                )
                                            })}
                                            
                                        </NavDropdown>
                                    </Nav>
                            </Navbar>
                            <div className='title'><input className='title-input' onChange={onChangeRecommendTitle} value={title} ref={titleRef} type="text" placeholder='제목을 입력해주세요'/></div>
                        </div>
                    </div>
                    <CKEditor
                        editor={ ClassicEditor }
                        data=""
                        onReady={ editor => {

                        } }
                        onChange={ ( event, editor ) => {
                            // console.log( editor.getData() );
                            setContent( editor.getData().trim() )
                        } }
                        onBlur={ ( event, editor ) => {
                            // console.log( 'Blur.', editor );
                            // console.log( editor.getData() ); // blur 되었을 때 값 출력
                            setContent( editor.getData().trim() );
                        } }
                        onFocus={ ( event, editor ) => {
                            // console.log( 'Focus.', editor );
                        } }
                    />
                </div>
                
            </div>
            <Footer></Footer>
            </>
        );
}


export default Editor;
