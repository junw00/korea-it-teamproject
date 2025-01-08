package com.team4.teamproject.web.dto.travelPlan.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class TravelPlanListResponseDto {
  private int plan_id;
  private int user_code;
  private String plan_start_date;
  private String plan_end_date;
  private int plan_day;
  private int area_id;
}
