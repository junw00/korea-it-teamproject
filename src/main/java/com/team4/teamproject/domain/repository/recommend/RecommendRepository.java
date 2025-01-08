package com.team4.teamproject.domain.repository.recommend;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface RecommendRepository {
    boolean saveRecommend(Recommend recommend) throws Exception;
    Recommend getNotice(int board_number) throws Exception;
    int getCountRecommend(Map<String, Object> map) throws Exception;

    List<Recommend> getRecommendList(Map<String, Object> recommendMap) throws Exception;
//    List<Recommend> getListRecommend()
}
