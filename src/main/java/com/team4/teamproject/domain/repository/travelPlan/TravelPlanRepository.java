package com.team4.teamproject.domain.repository.travelPlan;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TravelPlanRepository {
  TravelPlanEntity getTravelPlanEntity(int plan_id) throws Exception;

}
