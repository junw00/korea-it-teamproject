import './myCity.css';

export default function MyCity(){
    return(
        <div className="mycity-container">
            <div className="mycity-list">
                <h2 style={{fontSize : '24px', fontWeight : '600'} }>나의 여행 도시 목록</h2>

            </div>
            <div className="myciy-contents">
                <div className='myciy-contents-wrap'>
                    <div>
                    <a href="/"><img src="/image/location2.jpg"></img></a>
                    </div>
                    {/* <div className='mycity-contents-name'><p>부산</p></div>     */}
                </div>
                <div className='myciy-contents-wrap'>
                    <div>
                    <a href="/"><img src="/image/location2.jpg"></img></a>
                    </div>
                    {/* <div className='mycity-contents-name'><p>서울</p></div>     */}
                </div>
                <div className='myciy-contents-wrap'>
                    <div>
                    <a href="/"><img src="/image/location2.jpg"></img></a>
                    </div>
                    {/* <div className='mycity-contents-name'><p>춘천</p></div>     */}
                </div>
                <div className='myciy-contents-wrap'>
                    <div>
                    <a href="/"><img src="/image/location2.jpg"></img></a>
                    </div>
                    {/* <div className='mycity-contents-name'><p>대전</p></div>     */}
                </div>
                {/* <div className='myciy-contents-wrap'>
                    <div>
                    <a href="/"><img src="/image/location2.jpg"></img></a>
                    </div>
                    <div className='mycity-contents-name'><p>일본</p></div>    
                </div> */}
                
            </div>
        </div>
    )
}