export const selectMap = async () => {
  const new_script = src => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.addEventListener('load', () => {
        resolve();
      });
      script.addEventListener('error', e => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };
  
  // description: 카카오맵 스크립트 읽어오기 //
  const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1abd246873769c3497ff5b397fe74ed0');
    
  // description: 스크립트 읽기 완료 후 카카오맵 설정 //
  my_script.then(() => {
    const kakao = window['kakao'];
    kakao.maps.load(() => {
      // description: 마커를 담을 배열 //
      var markers = [];
      
      const mapContainer = document.getElementById('full-map'); // 지도를 표시할 div
      const options = {
        center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321), // 좌표설정
        level: 3
      };
      const map = new kakao.maps.Map(mapContainer, options); // 지도 생성
      const places = new kakao.maps.services.Places();
      const infowindow = new kakao.maps.InfoWindow({zIndex:1});

      // description: 키워드로 장소를 검색 //
      // searchPlaces();
      const searchForm = document.getElementById("submit_btn");
              searchForm?.addEventListener("click", function (e) {
              e.preventDefault();
              searchPlaces();
          });
      // description: 키워드 검색을 요청하는 함수 //
      const searchPlaces = function() {
        var keyword = document.getElementById('keyword').value;
        
        if (!keyword.replace(/^\s+|\s+$/g, '')) {
          // searchPlaces();
          alert('키워드를 입력해주세요!');
          return false;
        }
        // description: 장소검색 객체를 통해 키워드로 장소검색을 요청 //
        places.keywordSearch( keyword, placesSearchCB); 
      }
      
      

      // description: 장소검색이 완료됐을 때 호출되는 콜백함수 //
      const placesSearchCB = function(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            // description: 정상적으로 검색이 완료됐으면 검색 목록과 마커를 표출 //
            displayPlaces(data);
    
            // description: 페이지 번호를 표출 //
            displayPagination(pagination);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            alert('검색 결과가 존재하지 않습니다.');
            return;
        } else if (status === kakao.maps.services.Status.ERROR) {
            alert('검색 결과 중 오류가 발생했습니다.');
            return;
        }
      }
      // description: 검색 결과 목록과 마커를 표출하는 함수 //
      const displayPlaces = function(places) {
        var listEl = document.getElementById('placesList'), 
        menuEl = document.getElementById('menu_wrap'),
        fragment = document.createDocumentFragment(), 
        bounds = new kakao.maps.LatLngBounds(), 
        listStr = '';
        
        // description: 검색 결과 목록에 추가된 항목들을 제거 //
        removeAllChildNods(listEl);
    
        // description: 지도에 표시되고 있는 마커를 제거 //
        removeMarker();
        
        for ( var i=0; i<places.length; i++ ) {
    
            // description: 마커를 생성하고 지도에 표시 //
            var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
                marker = addMarker(placePosition, i), 
                itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다
    
            // description: 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해 LatLngBounds 객체에 좌표를 추가 //
            bounds.extend(placePosition);
    
            // description: 마커와 검색결과 항목에 mouseover 했을때 해당 장소에 인포윈도우에 장소명을 표시 //
            // description: mouseout 했을 때는 인포윈도우를 닫습니다 //
            (function(marker, title) {
                kakao.maps.event.addListener(marker, 'mouseover', function() {
                    displayInfowindow(marker, title);
                });
    
                kakao.maps.event.addListener(marker, 'mouseout', function() {
                    infowindow.close();
                });
    
                itemEl.onmouseover =  function () {
                    displayInfowindow(marker, title);
                };
    
                itemEl.onmouseout =  function () {
                    infowindow.close();
                };
            })(marker, places[i].place_name);
    
            fragment.appendChild(itemEl);
        }
    
        // description: 검색결과 항목들을 검색결과 목록 Element에 추가 //
        listEl.appendChild(fragment);
        menuEl.scrollTop = 0;
    
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }

      // 검색결과 항목을 Element로 반환하는 함수입니다
      const getListItem = function (index, places) {

        var el = document.createElement('li'),
        itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
                    '<div class="info">' +
                    '   <h5>' + places.place_name + '</h5>';

        if (places.road_address_name) {
            itemStr += '    <span>' + places.road_address_name + '</span>' +
                        '   <span class="jibun gray">' +  places.address_name  + '</span>';
        } else {
            itemStr += '    <span>' +  places.address_name  + '</span>'; 
        }
                    
          itemStr += '  <span class="tel">' + places.phone  + '</span>' +
                    '</div>';

        el.innerHTML = itemStr;
        el.className = 'item';

        return el;
      }

      const addMarker = function(position, idx, title) {
        var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
            imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
            imgOptions =  {
                spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
                spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
            },
            markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
                marker = new kakao.maps.Marker({
                position: position, // 마커의 위치
                image: markerImage 
            });
    
        marker.setMap(map); // 지도 위에 마커를 표출합니다
        markers.push(marker);  // 배열에 생성된 마커를 추가합니다
    
        return marker;
      }

      // 지도 위에 표시되고 있는 마커를 모두 제거합니다
      const removeMarker = function() {
        for ( var i = 0; i < markers.length; i++ ) {
            markers[i].setMap(null);
        }   
        markers = [];
      }

      // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
      const displayPagination = function(pagination) {
        var paginationEl = document.getElementById('pagination'),
            fragment = document.createDocumentFragment(),
            i; 

        // 기존에 추가된 페이지번호를 삭제합니다
        while (paginationEl.hasChildNodes()) {
            paginationEl.removeChild (paginationEl.lastChild);
        }

        for (i=1; i<=pagination.last; i++) {
            var el = document.createElement('a');
            el.href = "#";
            el.innerHTML = i;

            if (i===pagination.current) {
                el.className = 'on';
            } else {
                el.onclick = (function(i) {
                    return function() {
                        pagination.gotoPage(i);
                    }
                })(i);
            }

            fragment.appendChild(el);
        }
        paginationEl.appendChild(fragment);
      }

      // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
      // 인포윈도우에 장소명을 표시합니다
      const displayInfowindow = function(marker, title) {
          var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

          infowindow.setContent(content);
          infowindow.open(map, marker);
      }

       // 검색결과 목록의 자식 Element를 제거하는 함수입니다
      const removeAllChildNods = function(el) {   
        while (el.hasChildNodes()) {
            el.removeChild (el.lastChild);
        }
      }

      // 마커설정
      const markerPosition = new kakao.maps.LatLng(37.56000302825312, 126.97540593203321);
      const marker = new kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map);
    });
  });
}