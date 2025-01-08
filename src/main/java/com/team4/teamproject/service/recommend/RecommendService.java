package com.team4.teamproject.service.recommend;

import com.team4.teamproject.web.dto.recommendDto.AddRecommendReqDto;
import com.team4.teamproject.web.dto.recommendDto.GetRecommendRespDto;

import java.util.List;
import java.util.Map;

public interface RecommendService {
    boolean write(AddRecommendReqDto recommendReqDto) throws Exception;

    GetRecommendRespDto getRecommend(int board_number) throws Exception;

    int getCountRecommend(String location) throws Exception;

    List<GetRecommendRespDto> getRecommendList(String location) throws Exception;

}
