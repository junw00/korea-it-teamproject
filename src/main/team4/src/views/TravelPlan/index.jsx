/* global kakao */
import { React, useEffect, useState } from 'react'
import './style.css'
import TravelPlaceListItem from '../../components/TravelPlaceListItem';
import TravelPlanningPlaceListItem from '../../components/TravelPlanningPlaceListItem';
import { useNavigate, useParams } from 'react-router-dom';
import { searchMap } from './searchMap';
import { selectMap } from './selectMap';
import placeData from '../../components/TravelPlaceListItem/placeData';

export default function TravelPlan() {

  localStorage.setItem("place", JSON.stringify([]));

  //          state          //
    let [placeSelectView, setPlaceSelectView] = useState(true);
    let [destinationList, setDestinationListList] = useState(true);
    let [storeList, setStoreList] = useState(false);
    let [lodgingList, setLodgingList] = useState(false);
    let [planningView, setPlanningView] = useState(true);

    const navigator = useNavigate();
    const [check, setCheck] = useState(true);
    const [placeList, setPlaceList] = useState(placeData);

  //          event handler          //
    let onPlaceSelectViewClickHandler = () => {
    setPlaceSelectView(true);
    }

    let onNewPlaceSelectViewClickHandler = () => {
    setPlaceSelectView(false);
    }

    let onDestinationListClickHandler = () => {
    setDestinationListList(true);
    setStoreList(false);
    setLodgingList(false);
    }
    
    let onStoreListClickHandler = () => {
    setStoreList(true);
    setDestinationListList(false);
    setLodgingList(false);
    }

    let onLodgingListClickHandler = () => {
    setLodgingList(true);
    setStoreList(false);
    setDestinationListList(false);
    }

  const onPlanningCloseButtonClickHandler = () => {
    setPlanningView(false)
  }

  const onPlanningOpenButtonClickHandler = () => {
    setPlanningView(true)
  }

  const onLogoClickHandler = () => {
    navigator('/')
  }

  useEffect(() => { 
    searchMap();
  }, [placeSelectView]);

  useEffect(() => {
    selectMap();
  },[])

  // useEffect(() => {
  //   const placeList = localStorage.getItem('place');
  //   if(placeList == null) {
  //     placeList = [];
  //   }else {
  //     placeList = JSON.parse(placeList);
  //   }
  // },[])

  return (
    <div id='travel_plan_wrap'>
      <div className="travel_place">
        <div className="travel_place_menu">
          <div className="travel_logo" onClick={onLogoClickHandler}></div>
          <div className="travel_place_menu_list" onClick={onDestinationListClickHandler}>관광지 선택</div>
          <div className="travel_place_menu_list" onClick={onStoreListClickHandler}>식당 선택</div>
          <div className="travel_place_menu_list" onClick={onLodgingListClickHandler}>숙소 설정</div>
        </div>
        <div className="travel_plan">
          <div className="travel_plan_area">부산</div>
          <div className="travel_plan_date">2023.12.13(수) ~ 2023.12.19(화)</div>
          <div className="travel_plan_place">
            <div className="travel_plan_place_select">
              <div className={ placeSelectView ? "travel_plan_place_button" : "disable_button"} onClick={onPlaceSelectViewClickHandler}>장소 선택</div>
              <div className={ placeSelectView ? "disable_button" : "travel_plan_place_button"} onClick={onNewPlaceSelectViewClickHandler}>신규 장소 등록</div>
            </div>
              <form className='travel_plan_place_search_box' onSubmit="searchPlaces(); return false;">
                <input id='keyword' className='travel_plan_place_search_text' onSubmit={"searchPlaces(); return false;"} type="text" placeholder='장소명을 입력하세요.' />
                <button id='submit_btn' className="travel_plan_place_search_icon" type='submit'></button>
              </form>
              {/* <div className="travel_plan_place_search_icon_box">
                <div className="travel_plan_place_search_icon"></div>
              </div> */}
            { destinationList === true ? (
              <div className="travel_place_group">
                <div className="travel_place_group_list">추천</div>
                <div className="travel_place_group_list">명소</div>
                <div className="travel_place_group_list">유적지</div>
                <div className="travel_place_group_list">액티비티</div>
              </div>
            ) : (<></>)}
            
            { placeSelectView === true ? (
              <div className='travel_place_list_item'>
                {placeList.map((it) => {
                  return <TravelPlaceListItem key={it.id} {...it} />;
                })}
              </div>
            ) : (
              <div className="travel_new_place">
                <div className="travel_new_place_map">
                  <div id='map' className="map"></div>
                </div>
                <div id='menu_wrap' className="travel_new_place_text">검색 결과</div>
                <div id='placesList' className="travel_new_place_list">
                  {/* <div className="travel_new_place_box">
                    <div className="travel_new_place_left">
                      <div className="travel_new_place_name">신규장소 이름입니다</div>
                      <div className="travel_new_place_address">신규장소 주소입니다</div>
                    </div>
                    <div className="travel_new_place_right">등록</div>
                  </div> */}
                </div>
                <div id="pagination"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="travel_planning">
        <div className="travel_planning_day">
          <div className="travel_planning_date">1일차</div>
          <div className="travel_planning_date">1일차</div>
          <div className="travel_planning_date">1일차</div>
          <div className="travel_planning_date">1일차</div>
        </div>
        { planningView === true ? (
          <div className="travel_planning_box">
            <div className="travel_planning_list">
              <div className="travel_planning_count">내가 담은 여행장소 갯수입니다</div>
              <div className="travel_planning_place_list">
                <TravelPlanningPlaceListItem />
                {/* {placeList.map((it) => {
                  return <TravelPlanningPlaceListItem key={it.id} {...it} />;
                })} */}
              </div>
            </div>
            {/* <div className="travel_planning_button_close_box" onClick={onPlanningCloseButtonClickHandler}>
              <div className="travel_planning_close_button"></div>
            </div> */}
          </div>
        ) : (<></>
          // <div className="travel_planning_button_open_box" onClick={onPlanningOpenButtonClickHandler}>
          //     <div className="travel_planning_open_button"></div>
          // </div>
        )}
      </div>
      <div className="travel_plan_map">
        <div id='full-map' className={ planningView ? "right-map" : "full-map"}></div>
      </div>
    </div>
  )
}

