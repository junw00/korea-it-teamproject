package com.team4.teamproject.domain.repository.recommend;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Recommend {
    private int board_number;
    private String title;
    private int user_code;
    private String contents;
    private String location;
    private int like_count;
    private int view_count;
    private int comment_count;
    private String image_url;
    private LocalDateTime write_datetime;
}
