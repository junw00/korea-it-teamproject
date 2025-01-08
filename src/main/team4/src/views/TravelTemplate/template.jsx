import Header from '../../layout/Header'
import './template.css'
export default function TravelTemplate() {
    return(
        <>
        <Header/>
        <div className="travelTemplate">
        
            <div className='travelTemplate-container'>
                <div className='travelTemplate-header'>
                    <div className='travelTemplate-header-span'><span>OOO의 여행 계획표</span><span>2024.01-01.10</span></div>
                    <div style={{fontSize : '20px', marginTop : '20px',fontWeight : '600', color : ' rgb(73, 175, 251)'}}>DAY 1</div>
                </div>
                <div className='travelTemplate-body'>
                
                    <div className='travelTemplate-contents'>
                        <div className='travelTemplate-title'>
                            <div className='travelTemplate-title-name'><span style={{fontWeight : '700'}}>식당</span></div>
                            <div className='travelTemplate-title-img'><img src={process.env.PUBLIC_URL + '../image/restaurant2.png'}></img></div>
                        </div>    
                        <div className='travelTemplate-contents-wrap'>  
                            <div className='travelTemplate-contents-content'>
                                <div className='travelTemplate-contents-img'><img src={process.env.PUBLIC_URL + '../image/삼백호집.jpg'}></img></div>
                                <div className='travelTemplate-contents-etc'>이름 : </div>
                                <div className='travelTemplate-contents-etc'>장소 : </div>
                                <div className='travelTemplate-contents-etc'>시간 : </div>
                            </div>
                            <div className='travelTemplate-contents-content'>
                                <div className='travelTemplate-contents-img'><img src={process.env.PUBLIC_URL + '../image/이가네떡볶이.jpg'}></img></div>
                                <div className='travelTemplate-contents-etc'>이름 : </div>
                                <div className='travelTemplate-contents-etc'>장소 : </div>
                                <div className='travelTemplate-contents-etc'>시간 : </div>
                            </div>
                            <div className='travelTemplate-contents-content'>
                                <div className='travelTemplate-contents-img'><img src={process.env.PUBLIC_URL + '../image/웨이브온커피.jpg'}></img></div>
                                <div className='travelTemplate-contents-etc'>이름 : </div>
                                <div className='travelTemplate-contents-etc'>장소 : </div>
                                <div className='travelTemplate-contents-etc'>시간 : </div>
                            </div>
                            <div className='travelTemplate-contents-content'>
                                <div className='travelTemplate-contents-img'><img src={process.env.PUBLIC_URL + '../image/삼백호집.jpg'}></img></div>
                                <div className='travelTemplate-contents-etc'>이름 : </div>
                                <div className='travelTemplate-contents-etc'>장소 : </div>
                                <div className='travelTemplate-contents-etc'>시간 : </div>
                            </div>
                            
                            
                            
                        </div>  
                    </div>
                    <div className='travelTemplate-contents'>
                        <div className='travelTemplate-title'>
                            <div className='travelTemplate-title-name'><span style={{fontWeight : '700'}}>명소</span></div>
                            <div className='travelTemplate-title-img'><img src={process.env.PUBLIC_URL + '../image/attraction2.png'}></img></div>
                        </div>    
                        <div className='travelTemplate-contents-wrap'>  
                            <div className='travelTemplate-contents-content'>
                                <div className='travelTemplate-contents-img'><img src={process.env.PUBLIC_URL + '../image/삼백호집.jpg'}></img></div>
                                <div className='travelTemplate-contents-etc'>이름 : </div>
                                <div className='travelTemplate-contents-etc'>장소 : </div>
                                <div className='travelTemplate-contents-etc'>시간 : </div>
                            </div>
                            <div className='travelTemplate-contents-content'>
                                <div className='travelTemplate-contents-img'><img src={process.env.PUBLIC_URL + '../image/이가네떡볶이.jpg'}></img></div>
                                <div className='travelTemplate-contents-etc'>이름 : </div>
                                <div className='travelTemplate-contents-etc'>장소 : </div>
                                <div className='travelTemplate-contents-etc'>시간 : </div>
                            </div>
                            <div className='travelTemplate-contents-content'>
                                <div className='travelTemplate-contents-img'><img src={process.env.PUBLIC_URL + '../image/웨이브온커피.jpg'}></img></div>
                                <div className='travelTemplate-contents-etc'>이름 : </div>
                                <div className='travelTemplate-contents-etc'>장소 : </div>
                                <div className='travelTemplate-contents-etc'>시간 : </div>
                            </div>
                            <div className='travelTemplate-contents-content'>
                                <div className='travelTemplate-contents-img'><img src={process.env.PUBLIC_URL + '../image/삼백호집.jpg'}></img></div>
                                <div className='travelTemplate-contents-etc'>이름 : </div>
                                <div className='travelTemplate-contents-etc'>장소 : </div>
                                <div className='travelTemplate-contents-etc'>시간 : </div>
                            </div>
                                                        

                        </div>  
                    </div>
                    <div className='travelTemplate-contents'>
                        <div className='travelTemplate-title'>
                            <div className='travelTemplate-title-name'><span style={{fontWeight : '700'}}>숙소</span></div>
                            <div className='travelTemplate-title-img'><img src={process.env.PUBLIC_URL + '../image/hotel.png'}></img></div>
                        </div>    
                        <div className='travelTemplate-contents-wrap'>  
                            <div className='travelTemplate-contents-content'>
                                <div className='travelTemplate-contents-img'><img src={process.env.PUBLIC_URL + '../image/삼백호집.jpg'}></img></div>
                                <div className='travelTemplate-contents-etc'>이름 : </div>
                                <div className='travelTemplate-contents-etc'>장소 : </div>
                                <div className='travelTemplate-contents-etc'>시간 : </div>
                            </div>
                            <div className='travelTemplate-contents-content'>
                                <div className='travelTemplate-contents-img'><img src={process.env.PUBLIC_URL + '../image/이가네떡볶이.jpg'}></img></div>
                                <div className='travelTemplate-contents-etc'>이름 : </div>
                                <div className='travelTemplate-contents-etc'>장소 : </div>
                                <div className='travelTemplate-contents-etc'>시간 : </div>
                            </div>
                            <div className='travelTemplate-contents-content'>
                                <div className='travelTemplate-contents-img'><img src={process.env.PUBLIC_URL + '../image/웨이브온커피.jpg'}></img></div>
                                <div className='travelTemplate-contents-etc'>이름 : </div>
                                <div className='travelTemplate-contents-etc'>장소 : </div>
                                <div className='travelTemplate-contents-etc'>시간 : </div>
                            </div>
                            <div className='travelTemplate-contents-content'>
                                <div className='travelTemplate-contents-img'><img src={process.env.PUBLIC_URL + '../image/삼백호집.jpg'}></img></div>
                                <div className='travelTemplate-contents-etc'>이름 : </div>
                                <div className='travelTemplate-contents-etc'>장소 : </div>
                                <div className='travelTemplate-contents-etc'>시간 : </div>
                            </div>
                            
                            
                        </div>  
                    </div>
                </div>

            </div>
            

        </div>
        </>
    )
}