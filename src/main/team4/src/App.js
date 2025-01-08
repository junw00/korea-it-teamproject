
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './views/Main/index.jsx';
import Authentication from './views/Authentication/index.jsx';
import MyPage from './views/MyPage/index.jsx';
import TravelPlan from './views/TravelPlan/index.jsx';
import Recommend from './views/Recommend/index.jsx';
import Signup from './views/Authentication/signup.jsx';
import Editor from './views/Recommend/Write/writeEditor.jsx';
import Detail from './views/Recommend/Detail/detail';
import MultipleMonthsDemo from './calendar/calendar';
import TravelTemplate from './views/TravelTemplate/template.jsx';
import { useEffect } from 'react';
import { loadPage } from './loadPage/loadPage';
import { useDispatch } from 'react-redux';


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchDataOnLoad = async () => {
            if (localStorage.getItem('jwtToken') != null) {
                try {
                    const token = localStorage.getItem('jwtToken');
                    await loadPage(token, dispatch);
                // 여기에서 필요한 추가 작업을 수행할 수 있습니다.
                    console.log('페이지 로드 완료');
        
                } catch (error) {
                    console.error('페이지 로드 중 에러:', error.message);
                    // 페이지 로드 중 에러가 발생하면 적절한 조치를 취할 수 있습니다.
                }
        };
    }
    
        fetchDataOnLoad();
    
    }, [dispatch]);
    return (
        <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/auth' element={<Authentication />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/mypage' element={<MyPage />}></Route>
            <Route path='/travelplan' element={<TravelPlan />}></Route>
            <Route path='/recommend' element={<Recommend />}></Route>
            <Route path='/recommend/write' element={<Editor/>}></Route>
            <Route path='/recommend/:id' element={<Detail/>}></Route>
            <Route path='/mypage' element={<MyPage/>}></Route>
            <Route path='/calendar' element={<MultipleMonthsDemo/>}></Route>
            <Route path='/traveltemplate' element={<TravelTemplate/>}></Route>
        </Routes>
    );
}

export default App;
