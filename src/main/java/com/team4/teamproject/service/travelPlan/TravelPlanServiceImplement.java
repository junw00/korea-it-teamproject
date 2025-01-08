package com.team4.teamproject.service.travelPlan;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.team4.teamproject.domain.Destination;
import com.team4.teamproject.domain.Lodging;
import com.team4.teamproject.domain.Store;
import com.team4.teamproject.domain.repository.DestinationRepository;
import com.team4.teamproject.domain.repository.LodgingRepository;
import com.team4.teamproject.domain.repository.StoreRepository;
import com.team4.teamproject.domain.repository.travelPlan.TravelPlanRepository;
import com.team4.teamproject.web.dto.travelPlan.request.PostTravelPlanRequestDto;
import com.team4.teamproject.web.dto.travelPlan.response.DestinationResponseDto;
import com.team4.teamproject.web.dto.travelPlan.response.GetTravelPlanResponseDto;
import com.team4.teamproject.web.dto.travelPlan.response.LodgingResponseDto;
import com.team4.teamproject.web.dto.travelPlan.response.StoreResponseDto;
import com.team4.teamproject.web.dto.travelPlan.response.TravelPlanListResponseDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TravelPlanServiceImplement implements TravelPlanService {

  // private TravelPlanRepository travelPlanRepository;
  private final DestinationRepository destinationRepository;
  private final StoreRepository storeRepository;
  private final LodgingRepository lodgingRepository;

  // 관광지 리스트 불러오기
  @Override
  public List<DestinationResponseDto> getDestinationList(int area_id) throws Exception {
    List<DestinationResponseDto> getDestinationResponseDtoList = new ArrayList<>();
    DestinationResponseDto destinationResponseDto = null;
    List<Destination> destinationList = destinationRepository.getDestinationList(area_id);
    for (Destination destination : destinationList) {
      destinationResponseDto = DestinationResponseDto.builder()
                                .destination_id(destination.getDestination_id())
                                .group_name(destination.getGroup_name())
                                .destination_name_kr(destination.getDestination_name_kr())
                                .destination_name_en(destination.getDestination_name_en())
                                .address(destination.getAddress())
                                .image_url(destination.getImage_url())
                                .content(destination.getContent())
                                .destination_area_id(destination.getDestination_area_id())
                                .build();
      getDestinationResponseDtoList.add(destinationResponseDto);
    }
    return getDestinationResponseDtoList;
  }

  // 식당 리스트 불러오기
  @Override
  public List<StoreResponseDto> getStoreList(int area_id) throws Exception {
    List<StoreResponseDto> getStoreResponseDtoList = new ArrayList<>();
    StoreResponseDto storeResponseDto = null;
    List<Store> storeList = storeRepository.getStoreList(area_id);
    for (Store store: storeList) {
      storeResponseDto = StoreResponseDto.builder()
                          .store_id(store.getStore_id())
                          .group_name(store.getGroup_name())
                          .store_name_kr(store.getStore_name_kr())
                          .store_name_en(store.getStore_name_en())
                          .address(store.getAddress())
                          .tel_number(store.getTel_number())
                          .image_url(store.getImage_url())
                          .content(store.getContent())
                          .store_area_id(store.getStore_area_id())
                          .build();
      getStoreResponseDtoList.add(storeResponseDto);
    }
    return getStoreResponseDtoList;
  }

  // 숙소 리스트 불러오기
  @Override
  public List<LodgingResponseDto> getLodgingList(int area_id) throws Exception {
    List<LodgingResponseDto> getLodgingResponseDtoList = new ArrayList<>();
    LodgingResponseDto lodgingResponseDto = null;
    List<Lodging> lodgingList = lodgingRepository.getLodgingList(area_id);
    for (Lodging lodging: lodgingList) {
      lodgingResponseDto = LodgingResponseDto.builder()
                            .lodging_id(lodging.getLodging_id())
                            .lodging_name_kr(lodging.getLodging_name_kr())
                            .lodging_name_en(lodging.getLodging_name_en())
                            .address(lodging.getAddress())
                            .tel_number(lodging.getTel_number())
                            .image_url(lodging.getImage_url())
                            .content(lodging.getContent())
                            .lodging_area_id(lodging.getLodging_area_id())
                            .build();
      getLodgingResponseDtoList.add(lodgingResponseDto);
    }
    return getLodgingResponseDtoList;
  }

  // 여행계획 상세보기
  @Override
  public GetTravelPlanResponseDto getTravelPlan(int plan_id, String email) throws Exception {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getTravelPlan'");
  }

  @Override
  public boolean postTravelPlan(String email, PostTravelPlanRequestDto postTravelPlanRequestDto) throws Exception {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'postTravelPlan'");
  }

}
