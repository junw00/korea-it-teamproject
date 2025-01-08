import { useState } from "react";
import data from "./data";
import './location.css';
import { CloseButton } from "react-bootstrap";
import TravelPlan from "../views/TravelPlan";
import { Routes } from "react-router-dom";


function Location() {
    //지역 한글, 영어 이름
    let [location, setLocation] = useState(data);
    //모달창 on,off 기능
    let [locationModal, setLocationModal] = useState(false);
    //모달창 지역설명
    let [locationContent, setLocationContent] = useState(false);
    //props -> i
    let [title, setTitle] = useState(0);
    return(
        <div>
            <h4 className="location-name" id="location-name">국내 여행지</h4>
            <div className="location-container">
                
                {
                    location.map((a,i) => {
                        return(
                            <div className='main-body-contents'>
                                <button onClick={() => { setLocationModal(!locationModal); setTitle(i)}}><img src={process.env.PUBLIC_URL + '/image/location' + (i + 1) + '.jpg'} alt="busan" /></button>
                                <h2>{location[i].englishName}</h2>
                                <p> {location[i].koreanName} </p>
                                <div>{locationContent == true? location[i].content : null}</div>
                            </div>
                        )

                    })
                }
            {
                locationModal == true? <LocationModal location={location} title={title} setLocationModal={setLocationModal}/> : null
            }
            
            </div>
        </div>
    )

}
function LocationModal(props){
    return(
        <>
        <div className="location-modal-container">
            <span className="locattion-modal-header"><button onClick={() => {
                props.setLocationModal(false)}
            }><CloseButton/></button></span>
            <div className="location-modal-body">
                <div className="location-modal-left">
                    <h1>{props.location[props.title].englishName}</h1>
                    <h2>{props.location[props.title].koreanName}</h2>
                    <div style={{fontSize : '14px'}}>{props.location[props.title].content}</div>
                    <div className="location-modal-btn">
                    <button onClick={() => {  window.location.href='/travelplan'}}>일정생성</button>
                    </div>
                </div>
                <div className="location-modal-right">
                    <img src={process.env.PUBLIC_URL + '/image/location' + (props.title + 1)+ '.jpg'} alt="" />
                </div>
            </div>
        </div>
            <div className="modal-bg"></div>
        </>
    )
}
function BasicExample() {
    return <CloseButton/>;
  }


export default Location;