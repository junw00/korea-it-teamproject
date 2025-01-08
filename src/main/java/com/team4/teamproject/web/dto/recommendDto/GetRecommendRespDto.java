package com.team4.teamproject.web.dto.recommendDto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class GetRecommendRespDto {
    private int board_number;
    private String recommend_title;
    private String recommend_content;
    private String location;
    private String image_url;
    private int like_count;
    private int view_count;
    private int comment_count;
    private LocalDateTime write_datetime;
}
