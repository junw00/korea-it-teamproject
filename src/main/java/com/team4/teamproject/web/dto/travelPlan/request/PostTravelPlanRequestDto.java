package com.team4.teamproject.web.dto.travelPlan.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class PostTravelPlanRequestDto {
  @NotBlank
  private String plan_start_date;
  @NotBlank
  private String plan_end_date;
  @NotBlank
  private int plan_day;
  @NotBlank
  private int area_id;
}
