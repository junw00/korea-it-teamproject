package com.team4.teamproject.web.dto.travelPlan.response;

import java.util.List;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class GetTravelPlanResponseDto {
  private int plan_id;
  private int user_code;
  private String plan_start_date;
  private String plan_end_date;
  List<GetPlanDayListResponseDto> plan_day;
  private int area_id;
}
