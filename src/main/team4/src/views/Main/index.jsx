import React, { useState } from 'react'
import './style.css'
import Header from '../../layout/Header'
import RecommendItem from '../../components/recommendItem'
import Location from '../../components/location'
import data from '../../components/data'
import { useSelector } from 'react-redux'

export default function Main() {
  
  let [cityName, setCityName] = useState('');
  let [location, setLocation] = useState(data);

  const state = useSelector(state => {return state})
  console.log(state)

//   토큰 발급 후 토큰의 만료 시간 확인
    const jwtToken = state.auth.token; // 여기에 실제 토큰을 넣어주세요.

const decodeToken = (token) => {
    if (token == null) {
        return;
    }
    const decoded = atob(token.split('.')[1]);
    return JSON.parse(decoded);
};

const expirationTime = (token) => {
    if (token != null) {
        const decodedToken = decodeToken(token);
    if (decodedToken.exp) {
        const expirationDate = new Date(decodedToken.exp * 1000);
        return expirationDate.toUTCString();
    }
    return "No expiration time found";
}
};

console.log(expirationTime(jwtToken));

  
  return (
  <>
    <Header></Header>
    <div className='main-container'>
      
      <div className='main-top-search-travel'>어디로 여행을 떠나시나요?</div>  
          <div className='main-top-search'>
              <div className='main-top-search-city'>
                <input className='main-top-search-input' placeholder='도시명을 입력해주세요' value={cityName} onChange={(e) => {
                  setCityName(e.target.value)
                }}></input>
                <button type='submit' onClick={() => {
                 {
                  location.map((a,i) => {
                    if(cityName == location[i].koreanName){
                     console.log(location[i].koreanName) //왜 콘솔을 빼면 안나오지?
                    }
                  })
                  
                 }

                }}><img src={process.env.PUBLIC_URL + '../image/search.png'}></img></button>
              </div>
      </div>
      
      <div className='main-top'>
        <div className='main-top-recommend'>
          <div className='main-top-recommend-title'>추천 여행지 Top3</div>
          <div className='main-top-recommend-list'>
              <RecommendItem />
              <RecommendItem />
              <RecommendItem />
            
          </div>
        

        </div>
        
      </div>
      
      <div className='main-body' id='main-body'>
        <Location/>
      </div>
    </div>  
    
  </>
  )
}
