package com.team4.teamproject.web.dto.travelPlan.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class GetPlanDayListResponseDto {
  private int plan_day_id;
  private int plan_id;
  private int plan_day;
  private int plan_destination_id;
  private int plan_store_id;
  private int plan_lodging_id;
}
