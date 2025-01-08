package com.team4.teamproject.service.comment;

import com.team4.teamproject.web.dto.comment.response.CommentRespDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CommentService {
    boolean addComment(int board_number, String contents) throws Exception;

    List<CommentRespDto> getCommentList(int board_number) throws Exception;

}
