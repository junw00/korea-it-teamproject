package com.team4.teamproject.domain.repository.travelPlan;

import com.team4.teamproject.web.dto.travelPlan.request.PostTravelPlanRequestDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TravelPlanEntity {
	private int plan_id;
	private String plan_start_date;
	private String plan_end_date;
	private int plan_day;
	private int area_id;

}
