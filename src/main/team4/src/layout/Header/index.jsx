import './style.css'
import Main from '../../views/Main'
import { useSelector } from 'react-redux'

export default function Header(props) {
    
    const state = useSelector(state => {return state})
    // console.log(state)
    return (
    <div className='header-container'>
        <div className='header-top'>
            <div className='header-top-list'>
                <div className='logo-tag'>
                    <img src="" alt="" />
                    <a href="/" className='logo'><img className='logo-img' src={process.env.PUBLIC_URL + '../image/airplane3.png'}/></a>
                </div>
                <div className='header-right'>
                    <a href="/#main-body" className='travel-place'>여행지</a>
                    <a href="/recommend" className='recommend-travel'>추천 여행지</a>
                    {state.auth.user_name != null ? <a href="/mypage" className='my-page'>마이페이지</a> : null}
                    {/* {props.respData != true? <a href="/auth" className='login'>로그인</a> : <a href="/auth" className='login'>로그아웃</a>  } */}
                    {state.auth.user_name != null ? <a href="" className='login'>{state.auth.user_name}님</a> : <a href="/auth" className='login'>로그인</a>}
                    {state.auth.user_name != null ? <a href="" className='login' onClick={() => {{localStorage.removeItem('jwtToken')}}}>로그아웃</a> : null}
                    
                    
                    
                    
                </div>
            </div>
        </div>

    </div>
    )
}

