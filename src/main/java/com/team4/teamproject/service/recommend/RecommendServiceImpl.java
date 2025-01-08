package com.team4.teamproject.service.recommend;




import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.team4.teamproject.domain.repository.recommend.Recommend;
import com.team4.teamproject.domain.repository.recommend.RecommendRepository;
import com.team4.teamproject.web.dto.recommendDto.AddRecommendReqDto;
import com.team4.teamproject.web.dto.recommendDto.GetRecommendRespDto;

import java.util.*;

@Service
@Slf4j
public class RecommendServiceImpl implements RecommendService{

    private RecommendRepository recommendRepository;

    @Autowired
    public RecommendServiceImpl(RecommendRepository recommendRepository) {
        this.recommendRepository = recommendRepository;
    }

    @Override
    public boolean write(AddRecommendReqDto recommendReqDto) throws Exception{
        Recommend recommend = null;
        recommend = Recommend.builder()
                            .title(recommendReqDto.getRecommend_title())
                            .contents(recommendReqDto.getRecommend_content())
                            .location(recommendReqDto.getLocation())
                            .image_url(recommendReqDto.getImage_url())
                            .build();
            recommendRepository.saveRecommend(recommend);

        return recommendReqDto.getRecommend_title().length() > 0 && recommendReqDto.getRecommend_content().length() > 0;
    }

    @Override
    public GetRecommendRespDto getRecommend(int board_number) throws Exception{
        GetRecommendRespDto getRecommendRespDto = null;

        Recommend recommend = recommendRepository.getNotice(board_number);
        getRecommendRespDto = GetRecommendRespDto.builder()
                .board_number(recommend.getBoard_number())
                .recommend_title(recommend.getTitle())
                .recommend_content(recommend.getContents())
                .location(recommend.getLocation())
                .like_count(recommend.getLike_count())
                .view_count(recommend.getView_count())
                .comment_count(recommend.getComment_count())
                .write_datetime(recommend.getWrite_datetime())
                .build();
        return getRecommendRespDto;
    }

    @Override
    public int getCountRecommend(String location) throws Exception {
        Map<String, Object> locationMap = new HashMap<>();
        locationMap.put("location", location);

        return recommendRepository.getCountRecommend(locationMap);
    }


    @Override
    public List<GetRecommendRespDto> getRecommendList(String location) throws Exception {
        Map<String, Object> locationMap = new HashMap<>();
        locationMap.put("location", location);
        List<GetRecommendRespDto> getRecommendRespDtoList = new ArrayList<>();
        GetRecommendRespDto getRecommendRespDto = null;
        List<Recommend> recommendList = recommendRepository.getRecommendList(locationMap);
        for (Recommend recommend : recommendList) {
            getRecommendRespDto = GetRecommendRespDto.builder()
                                    .board_number(recommend.getBoard_number())
                                    .recommend_title(recommend.getTitle())
                                    .recommend_content(recommend.getContents())
                                    .view_count(recommend.getView_count())
                                    .write_datetime(recommend.getWrite_datetime())
                                    .like_count(recommend.getLike_count())
                                    .location(recommend.getLocation())
                                    .build();
//            log.info("list: {}", getRecommendRespDto);
            getRecommendRespDtoList.add(getRecommendRespDto);
        }
        return getRecommendRespDtoList;
    }


}
