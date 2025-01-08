package com.team4.teamproject.web.dto.travelPlan.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class StoreResponseDto {
  private int store_id;
  private String group_name;
  private String store_name_kr;
  private String store_name_en;
  private String address;
  private String tel_number;
  private String image_url;
  private String content;
  private int store_area_id;
}
