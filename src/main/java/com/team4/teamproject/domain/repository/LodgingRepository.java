package com.team4.teamproject.domain.repository;

import org.apache.ibatis.annotations.Mapper;

import com.team4.teamproject.domain.Lodging;

import java.util.List;

@Mapper
public interface LodgingRepository {

  Lodging getLodging(int lodging_id) throws Exception;

  List<Lodging> getLodgingList(int area_id) throws Exception;
}
