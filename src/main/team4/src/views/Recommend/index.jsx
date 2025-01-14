import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import Header from '../../layout/Header';


import { Nav, NavDropdown, Navbar } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RecommendItem from '../../components/recommendItem';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import PagingNumber from '../../components/pagingNumber/pagingNumber';
import Footer from '../../layout/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useSelector } from 'react-redux';
import { loadPage } from '../../loadPage/loadPage';

// 1280
export default function Recommend() {

    const navigate = useNavigate();
    const state = useSelector(state => {return state})

    let [location, setLocation] = useState("지역");
    let [locationList, setLocationArr] = useState([]);
    let [recommendCount, setRecommendCount] = useState(0)

    // let locationRef = useRef(location)
    // select option 태그 크기 조절
    const locationArr = ['지역', '서울', '부산', '제주', '경주',
                        '강릉', '여수', '거제통영', '남원', '전주',
                        '포항', '인천', '춘천', '대전', '목포', '군산',
                        '안동', '울릉도', '가평', '제천', '수원', '영월'];

    // 선택한 지역에 대한 게시글
    useEffect(() => {
        axios.get(`/recommend/board_list/${location}`)
        .then((response) => {
            let recommendLocation = response.data.data
            setLocationArr(recommendLocation)
            // console.log(locationList)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [location])

    // 선택한 지역에 대한 게시글 수 
    useEffect(() => {
        axios.get(`/recommend/board_list/${location}/count`)
        .then((response) => {
            setRecommendCount(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [location])
    console.log(state)
    return (
        <>
            <div className='recommend-container'>
                <div className='recommend-box'>
                <Header/>
                    <div className='recommend-top'>
                        <div className='recommend-img-box'>
                        </div>
                        <div className='recommend-banner-top'>
                            <div className='recommend-magazine'>
                                <div className='recommend-magazine-title'>
                                    매거진
                                </div>
                                <div className='recommend-magazine-content'>
                                    <p>마이로 여행 에디터가 여행 코스, 인기 스팟, 여행 꿀팁, 여행기, 이벤트 정보 등 여행 준비에 도움이 되는 콘텐츠들을 소개해 주는 마이로 매거진</p>
                                </div>
                                <a href="#list-title" className='move-recommend-main-list'>
                                    <span>목록보기</span>
                                    <span>⟶</span>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    <div className='recommend-main-top-box'>
                        <div className='recommend-main-top'>
                            <div className='recommend-main-top-left'>최신글</div>
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
                        </div>
                    </div>
                    <div className='recommend-main-box' id='list-title'>
                        <div className='recommend-main-list'>
                            {locationList.map((location, i) => {
                                const date = String(location.write_datetime).split("T");
                                location.write_datetime = date;

                                if (location.image_url === null) {
                                    location.image_url = "data:image/png;base64,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"
                                }
                                return(
                                    <RecommendItem {...location} />
                                )

                            })}
                        </div>
                    </div>
                </div>
                <div>
                
                </div>
                <div className='recommend-main-footer'>
                    <div className='write-btn-img-box'>
                    <PagingNumber page = {parseInt(recommendCount / 16) + 1}/>
                        <div className='write-btn-img'><button className='write-btn' onClick={() => {
                            window.location.href='/recommend/write'
                        }}><span className='write-img'><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></span>글쓰기</button></div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
