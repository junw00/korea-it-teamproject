import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './myCity.css';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export default function MyCity(){
    const [post, setPost] = useState("내가 쓴 게시글")
    const postOption = ["내가 쓴 게시글", "좋아요 누른 게시글"]
    return(
        <div className="mycity-container">
            <div className="mycity-list">
                <Navbar variant="dark" bg="dark" expand="lg" color='black' className='navbar'>
                        <Nav>
                            <NavDropdown title={post} post={post}>
                                {postOption.map((post, i) => {
                                    return(
                                        <NavDropdown.Item title={post} onClick={() => {
                                            setPost(post)
                                        }}>{post}</NavDropdown.Item>
                                    )
                                })}
                                
                            </NavDropdown>
                        </Nav>
                </Navbar>

            </div>
            <div className="mypage-post-container">
                <div className="mypage-post-location-img-box">
                    <img className="area-img" src="/image/location1.jpg" alt="" />
                </div>
                <div className="mypage-post-info-box">
                    <div className="mypage-post-title">제목</div>
                    <div className="mypage-post-date">
                        2023-12-19 ~ 2023-12-21
                    </div>
                </div>
            </div>
        </div>
    )
}