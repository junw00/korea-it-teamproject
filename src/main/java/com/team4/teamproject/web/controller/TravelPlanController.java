package com.team4.teamproject.web.controller;

import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.team4.teamproject.service.travelPlan.TravelPlanService;
import com.team4.teamproject.web.dto.CMRespDto;
import com.team4.teamproject.web.dto.travelPlan.request.PostTravelPlanRequestDto;
import com.team4.teamproject.web.dto.travelPlan.response.DestinationResponseDto;
import com.team4.teamproject.web.dto.travelPlan.response.GetTravelPlanResponseDto;
import com.team4.teamproject.web.dto.travelPlan.response.LodgingResponseDto;
import com.team4.teamproject.web.dto.travelPlan.response.StoreResponseDto;
import com.team4.teamproject.web.dto.travelPlan.response.TravelPlanListResponseDto;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/travelplan")
@RequiredArgsConstructor
public class TravelPlanController {
  
  private final TravelPlanService travelPlanService;

  // 관광지 리스트 불러오기
  @GetMapping("/{area_id}/destination-list")
  public ResponseEntity<?> getDestinationList(@PathVariable(value = "area_id", required = true) int area_id) {
    List<DestinationResponseDto> destinationList = null;
    try {
      destinationList = travelPlanService.getDestinationList(area_id);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.ok().body(new CMRespDto<>(-1, "fail", destinationList));
    }
    return ResponseEntity.ok().body(new CMRespDto<>(1, "success", destinationList));
  }
  
  // 숙소 리스트 불러오기
  @GetMapping("/{area_id}/lodging-list")
  public ResponseEntity<?> getLodgingList(@PathVariable(value = "area_id") int area_id) {
    List<LodgingResponseDto> lodgingList = null;
    try {
      lodgingList = travelPlanService.getLodgingList(area_id);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.ok().body(new CMRespDto<>(-1, "fail", lodgingList));
    }
    return ResponseEntity.ok().body(new CMRespDto<>(1, "success", lodgingList));
  }

  // 식당 리스트 불러오기
  @GetMapping("/{area_id}/store-list")
  public ResponseEntity<?> getStoreList(@PathVariable(value = "area_id") int area_id) {
    List<StoreResponseDto> storeList = null;
    try {
      storeList = travelPlanService.getStoreList(area_id);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.ok().body(new CMRespDto<>(-1, "fail", storeList));
    }
    return ResponseEntity.ok().body(new CMRespDto<>(1, "success", storeList));
  }
  
  // 여행계획 상세보기
  @GetMapping("/detail/{plan_id}")
  public ResponseEntity<?> getTravelPlan(@PathVariable(value = "plan_id") int plan_id, @AuthenticationPrincipal String email) {
      GetTravelPlanResponseDto getTravelPlanResponseDto = null;
      try {
        getTravelPlanResponseDto = travelPlanService.getTravelPlan(plan_id, email);
      } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.ok().body(new CMRespDto<>(-1, "fail", getTravelPlanResponseDto));
      }
      return ResponseEntity.ok().body(new CMRespDto<>(1, "success", getTravelPlanResponseDto));
  }

  // 여행계획 작성
  @PostMapping("")
  public ResponseEntity<?> postTravelPlan(@RequestBody PostTravelPlanRequestDto postTravelPlanRequestDto, @AuthenticationPrincipal String email) {
    boolean result = false;
    try {
      result = travelPlanService.postTravelPlan(email, postTravelPlanRequestDto);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.ok().body(new CMRespDto<>(-1, "fail", result));
    }
    return ResponseEntity.ok().body(new CMRespDto<>(1, "success", result));
  }

}
