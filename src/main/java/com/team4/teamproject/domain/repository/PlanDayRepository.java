package com.team4.teamproject.domain.repository;

import org.apache.ibatis.annotations.Mapper;

import com.team4.teamproject.domain.PlanDay;

@Mapper
public interface PlanDayRepository {
  PlanDay getPlanDayList(int plan_id) throws Exception;
}
