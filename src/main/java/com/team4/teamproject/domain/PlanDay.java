package com.team4.teamproject.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PlanDay {
  private int plan_day_id;
  private int plan_id;
  private int plan_day;
  private int plan_destination_id;
  private int plan_store_id;
  private int plan_lodging_id;
}
