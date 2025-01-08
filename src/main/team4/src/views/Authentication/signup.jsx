import React, { useEffect, useState } from 'react'
import './style.css'
import Header from '../../layout/Header';
import axios from 'axios';
let User2 = {
  email : 'asd@naver.com',
  pw : 'asd123!@#',
  nickname : '홍길동'
}

function Signup(){
  // 초기값 세팅
  let [email, setEmail] = useState('');
  let [pw, setPw] = useState('');
  let [pwCheck, setPwCheck] = useState('');
  let [nickname, setNickname] = useState('');
  let[name, setName] = useState('');
  let[tel, setTel] = useState('');
  let [pwCheckMsg, setPwMsg] = useState('');
  let [userData, setUserData] = useState([]);
  
  

  //유효성 검사
  let [pwValid, setPwValid] = useState(false);
  let [pwCheckValid, setPwCheckValid] = useState(false);
  let [emailValid, setEmailValid] = useState(false);
  let [notAllow, setNotAllow] = useState(true);

  //이메일 확인
  let handleEmail = (e) => {
    setEmail(e.target.value);
    
    let regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if(regex.test(email)){
      setEmailValid(true);
      
    }else{
      setEmailValid(false);
      

    }

  }

  
  //비밀번호 확인
  let handlePw = (e) => {
    setPw(e.target.value);
    let regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    
    if(regex.test(pw)){
      setPwValid(true);
      
    }else{
      setPwValid(false);
    }
  }
  //비밀번호 일치,불일치 확인
  let handlePwCheck = (e) => {
      setPwCheck(e.target.value);
      // if(pwCheck != pw){
      //   setPwMsg("비밀번호가 불일치합니다.");

      // }else if(pwCheck == pw){
      //   setPwMsg('비밀번호가 일치합니다.');  //왜 하나를 더 입력해야 일치하지? 
      // }
  }
  //회원가입 완료
  let onClicksignupButton = () => {
    
    axios.post('/signup',{email : email, username : nickname, name : name, tel : tel, password : pw})
    .then((response) => {
      console.log(response);
      // setUserData(response.data);
        if(emailValid == true && pwValid == true){
    alert('회원가입이 완료되셨습니다.');
    window.location.replace('http://localhost:3000/auth')
   }

    })
    .catch((error) => {
      console.log(error);
    })

    
   
  
    
  
  }
//회원가입 조건에 전부 맞으면, 회원가입창 활성화
  useEffect(() => {
    if(emailValid && pwValid){
      setNotAllow(false);
    }else{
      setNotAllow(true);
    }
  },[emailValid, pwValid])

  
    
  
  
    return(
      <div className='signup'>
        <Header/>
        <div className='signup-signup'>
          {/* <div></div> */}
          <div className='signup-container'>
            <div className='signup-main'>
              <div className='signup-header'>
                <a href='/'><img className='signup_body_header_img' src={process.env.PUBLIC_URL + '../image/airplane3.png'}/></a>
                
              </div>
              <div className='signup-body'>
                <div className='sign_body_input'>
                      <label style={{fontSize : '15px'}}>이메일</label>
                      <br/>
                      <input className='checkInput' type='text' name='mail' value={email} onChange={handleEmail}/>
                      
                      <button className='doubleCheck-btn' onClick={() => {
                        axios.get('/signup/validation/email?email=' + email)
                              .then((response) => {
                                console.log(response)
                                {if(response.data.data && emailValid == true)
                                  {alert('사용 가능한 이메일입니다.')}
                                  else if(!response.data.data){alert('이미 사용중인 이메일입니다.')}
                                  else if(!emailValid){alert('올바른 이메일을 입력해주세요.')}}
                                
                              })
                        
                        
                        
                        
                      }}>중복확인</button>
                </div>  
                <div className='sign_body_input'>
                      <label style={{fontSize : '15px'}}>닉네임</label>
                      <br/>
                      <input className='checkInput' type='text' value={nickname} onChange={(e) => {setNickname(e.target.value)}}/> 
                      <button className='doubleCheck-btn' onClick={() => {
                        console.log(nickname)
                        axios.get('/signup/validation/username?username=' + nickname)
                              .then((response) => {
                                console.log(response)
                                
                                {response.data.data == true ? alert('사용 가능한 닉네임입니다.') : alert('이미 사용중인 닉네임입니다.') }
                                
                              })
                              .catch((error) => {
                                console.log(error);
                              })

                        
                        
                      }}>중복확인</button>
                </div>  
                <div className='sign_body_input'>
                      <label  style={{fontSize : '15px'}}>이름</label>
                      <br/>
                      <input className='pwInput' type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>  
                <div className='sign_body_input'>
                      <label  style={{fontSize : '15px'}}>전화번호</label>
                      <br/>
                      <input className='pwInput' type='text' value={tel} onChange={(e) => {setTel(e.target.value)}}/>
                </div>  
                <div className='sign_body_input'>
                      <label  style={{fontSize : '15px'}}>비밀번호</label>
                      <br/>
                      <input className='pwInput' type='password'  placeholder='영문,숫자, 특수문자 포함 8자 이상' value={pw} onChange={handlePw}/>
                </div>  
                <div className='sign_body_input'>
                      <label  style={{fontSize : '15px'}}>비밀번호 확인</label>
                      <br/>
                      <input className='pwInput' type='password'  placeholder='영문,숫자, 특수문자 포함 8자 이상' name='pwCheck' value={pwCheck} onChange={handlePwCheck}/>
                      <p>{pwCheckMsg}</p>
                </div>  
                <div className='signup-footer'>
                <button className='signup-btn' onClick={onClicksignupButton} disabled={notAllow}>회원가입</button>
              </div>
              </div>
              

            </div>
            <div className='signup-main-right'></div>
          </div>
        </div>
      </div>
  
    )
  
  }
  export default Signup;