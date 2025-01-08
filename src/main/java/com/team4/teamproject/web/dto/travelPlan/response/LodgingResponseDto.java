package com.team4.teamproject.web.dto.travelPlan.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LodgingResponseDto {
  private int lodging_id;
  private String lodging_name_kr;
  private String lodging_name_en;
  private String address;
  private String tel_number;
  private String image_url;
  private String content;
  private int lodging_area_id;
}
