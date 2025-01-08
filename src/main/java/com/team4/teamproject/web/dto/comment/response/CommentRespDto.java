package com.team4.teamproject.web.dto.comment.response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommentRespDto {
    private String user_name;
    private String user_email;
    private int comment_number;
    private int board_number;
    private int user_code;
    private String contents;
    private LocalDateTime write_datetime;
}
