package com.team4.teamproject.web.dto.recommendDto;

import lombok.Data;

@Data
public class AddRecommendReqDto {
    private String recommend_title;
    private String recommend_content;
    private String location;
    private String image_url;
}
