import React from 'react'
import './style.css'

export default function TravelPlanningPlaceListItem() {
  var placeList = localStorage.getItem('place');
  placeList = JSON.parse(placeList);
  console.log(placeList)

  return (
    <>
            {
              placeList.map((a,i) => {
                return (
                  <div className="travel_planning_place_list">
                    <div className="travel_planning_select_place">
                      <div className="travel_planning_place_box">
                        <div className="travel_planning_place_left" placeList={placeList[i]} i={i} key={i}>
                          <div className="travel_planning_place_img"></div>
                          <div className="travel_planning_place_text">
                            <div className="travel_planning_place_name">{placeList[i].placeName}</div>
                            <div className="travel_planning_place_info">
                              <div className="travel_planning_group_name">{placeList[i].groupName}</div>
                              <div className="travel_planning_place_address">{placeList[i].address}</div>
                            </div>
                          </div>
                        </div>
                        <div className="travel_planning_place_right">
                          <div className="travel_planning_close_box">X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
    </>
  )
}
