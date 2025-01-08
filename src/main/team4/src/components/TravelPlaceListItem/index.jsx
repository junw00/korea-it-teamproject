import React, { useEffect, useState } from 'react'
import './style.css'

export default function TravelPlaceListItem(props) {

  const [check, setCheck] = useState(true);
  
  const onPlacePlusButtonClickHandler = () => {
    // localStorage.setItem("place",props.id);
    var placeList = localStorage.getItem("place");
    if (placeList == null) {
      placeList = [];
    } else {
      placeList = JSON.parse(placeList);
    }
    placeList.push(props);
    placeList = Array.from(new Set(placeList));
    localStorage.setItem("place", JSON.stringify(placeList));
  }

  const onCheckOutButtonClickHandler = () => {
    localStorage.removeItem("place",props.id);
  }

  // useEffect(() => {
  //   console.log(props.id);
  //   var placeList = localStorage.getItem("place");
    // if (placeList == null) {
    //   placeList = [];
    // } else {
    //   placeList = JSON.parse(placeList);
    // }
  //   placeList = JSON.parse(placeList);
    // placeList.push(props.id);
  //   placeList = new Set(placeList);
  //   placeList = Array.from(placeList);
    // localStorage.setItem('place', JSON.stringify(placeList));
  // },[check])

  return (
    <div className="travel_place_list">
      <div className="travel_place_list_box">
        <div className="travel_place_list_left">
          <div className="travel_place_list_img_box"></div>
          <div className="travel_place_list_text">
            <div className="travel_place_name">{props.placeName}</div>
            <div className="travel_place_group_box">
              <div className="travel_place_group_name">{props.groupName}</div>
              <div className="travel_place_group_address">{props.address}</div>
            </div>
          </div>
        </div>
        <div className="travel_place_list_right">
          {check === true ? (<button id='plus_button' className="plus_image_box" onClick={() => {setCheck(false); onPlacePlusButtonClickHandler();}}>
          </button>) : (<button className="check_image_box" onClick={() => {setCheck(true); onCheckOutButtonClickHandler();}}>
          </button>)}
        </div>
      </div>
    </div>
  )
}