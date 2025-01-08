import React, { useState } from 'react'
import './style.css'
import MyPlan from '../../components/myPage/myPlan'
import Header from '../../layout/Header'
import MyCity from '../../components/myPage/myPagePost';



export default function MyPage() {
    const [select, setSelect] = useState(true);
    
    return (
        <div className='mypage-container'>
            <Header/>
            <div className='mypage-myplan-info'>
                <div className='mypage-schedule-box'><div className='mypage-schedule' onClick={() => {setSelect(true)}} style={select === true ? {borderBottom: '5px solid #136BF0', color: '#136BF0'} : null}>나의 일정</div></div>
                <div className='mypage-travel-list-box'><div className='mypage-travel-list' onClick={() => {setSelect(false)}} style={select === false ? {borderBottom: '5px solid #136BF0', color: '#136BF0'} : null}>게시글 보기</div></div>
            </div>
            {select == true ? <div className='mypage-main-top'><h2 className='mypage-main-title'>나의 일정</h2></div> : ""}
            {select == true ? <MyPlan/> : <MyCity/>}
            

        </div>
    )
}
