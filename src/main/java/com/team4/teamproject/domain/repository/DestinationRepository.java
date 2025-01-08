package com.team4.teamproject.domain.repository;

import org.apache.ibatis.annotations.Mapper;
import java.util.List;
import java.util.Map;

import com.team4.teamproject.domain.Destination;

@Mapper
public interface DestinationRepository {
  Destination getDestination(int destination_id) throws Exception;

  List<Destination> getDestinationList(int area_id) throws Exception;

}
