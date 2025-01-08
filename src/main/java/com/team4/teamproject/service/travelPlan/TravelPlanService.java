package com.team4.teamproject.service.travelPlan;

import java.util.List;

import com.team4.teamproject.web.dto.travelPlan.request.PostTravelPlanRequestDto;
import com.team4.teamproject.web.dto.travelPlan.response.DestinationResponseDto;
import com.team4.teamproject.web.dto.travelPlan.response.GetTravelPlanResponseDto;
import com.team4.teamproject.web.dto.travelPlan.response.LodgingResponseDto;
import com.team4.teamproject.web.dto.travelPlan.response.StoreResponseDto;
import com.team4.teamproject.web.dto.travelPlan.response.TravelPlanListResponseDto;

public interface TravelPlanService {
  
  // 관광지 리스트 불러오기
  List<DestinationResponseDto> getDestinationList(int area_id) throws Exception;
  // 식당 리스트 불러오기
  List<StoreResponseDto> getStoreList(int area_id) throws Exception;
  // 숙소 리스트 불러오기
  List<LodgingResponseDto> getLodgingList(int area_id) throws Exception;
  // 여행계획 상세보기
  GetTravelPlanResponseDto getTravelPlan(int plan_id, String email) throws Exception;
  // 여행계획 작성
  boolean postTravelPlan(String email, PostTravelPlanRequestDto postTravelPlanRequestDto) throws Exception;
}
