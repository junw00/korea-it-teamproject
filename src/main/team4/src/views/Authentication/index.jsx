import React, { useEffect, useState } from 'react'
import './style.css'
import signup from './signup';
import Header from '../../layout/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, setToken } from '../../stores/authAction';
// let User = {
//   email : 'asd@naver.com',
//   pw : 'asd123!@#'
// }

export default function Authentication() {
    
    const navigate = useNavigate()

    let [token, setToken] = useState("");

    let [email, setEmail] = useState('');
    let [pw, setPw] = useState('');
    
    let [pwValid, setPwValid] = useState(false);
    let [emailValid, setEmailValid] = useState(false);

    let [notAllow, setNotAllow] = useState(true);
    let [respData, setRespData] = useState(true);

    let state = useSelector(state => {return state})
    let dispatch = useDispatch();

    let handleEmail = (e) => {
        setEmail(e.target.value);
        
        let regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regex.test(email)){
            setEmailValid(true);
        }else{
            setEmailValid(false);
        }
    }

    let handlePw = (e) => {
        setPw(e.target.value);
        let regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex.test(pw)){
            setPwValid(true);
        }else{
            setPwValid(false);
        }
    }
    // console.log(state)

    //로그인
    let onClickConfirmButton = () => {
        dispatch(login(email, pw, navigate));
        }

    useEffect(() => {
        if(emailValid && pwValid){
        setNotAllow(false);
    }else{
        setNotAllow(true);
    }
    },[emailValid, pwValid])

    
    useEffect(() => {
        const storedToken = localStorage.getItem('jwtToken');
        
        if (storedToken != null) {
          // 저장된 토큰이 있다면 Redux 스토어에 설정
            dispatch(() => setToken(storedToken));
        }
        }, [dispatch]);

    return (
    <div className='authentication'>
    <Header respData = {!respData}/>
    
    <div className='auth_container'>
    
      <div className='auth_main'>
      
          <div className='auth_body'>
            <div className='auth_body_header'>
            <a href='/'><img className='auth_body_header_img' src={process.env.PUBLIC_URL + '../image/airplane3.png'}/></a>
            
            </div>
            
            <div className='auth_body_body'>
            <form>
                <div className='auth_body_input'>
                  <label style={{fontSize : '15px'}}>이메일</label>
                  <br/>
                  <input type='text' name='mail' value={email} onChange={handleEmail}/>
                </div>
                <div className='auth_errorMessage'>
                    <div>
                      {
                        !emailValid && email.length > 0 && (
                          <div>올바른 이메일을 입력해주세요.</div>
                          )
                      }
                    </div>
                </div>
                <div className='auth_body_input'>
                  <label style={{fontSize : '15px'}}>비밀번호</label>
                  <br/>
                  <input className='input' placeholder='영문,숫자, 특수문자 포함 8자 이상' type='password' value={pw} onChange={handlePw}></input>
                </div>
            </form>

                <div className='auth_errorMessage'>
                    <div>
                      {
                        !pwValid && pw.length > 0 &&(
                          <div>올바른 비밀번호를 입력해주세요.</div>
                          )
                      }
                    </div>
                </div>
                <div className='auth_body_pw'> 
                  <a href='/' style={{fontSize : '12px'}}>비밀번호를 잊으셨나요?</a>
                </div>
                <button type='submit' className='siginin-btn' onClick={onClickConfirmButton} disabled={notAllow}>로그인</button>
                <div className='signupA'>
                  <span>아직 회원이 아니세요? </span>
                  <a href='/signup'>회원가입</a>
                </div>
                <div className='sns-signin'>
                  
                        
                </div>
            </div>
            
            <div className='auth_body_footer'>
            <p style={{fontSize : '12px'}}>SNS간편로그인</p>
                  <a href='#'><img src={process.env.PUBLIC_URL + '../image/kakao_icon.png'} style={{borderRadius : '50%'}}/></a>
                
                  <a href='#'><img src={process.env.PUBLIC_URL + '../image/naver_icon.png'}/></a>
              
                  <a href='/oauth2/authorization/google'><img src= {process.env.PUBLIC_URL+ '../image/google_icon.png'}/></a>
              
            </div>
          </div>
            <div className='auth_body-right'></div>
        </div>
        
    </div>
  </div>
  
  )
  
}