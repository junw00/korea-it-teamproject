package com.team4.teamproject.service.comment;

import com.team4.teamproject.domain.repository.comment.Comment;
import com.team4.teamproject.domain.repository.comment.CommentRepository;
import com.team4.teamproject.web.dto.comment.response.CommentRespDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
@Slf4j
public class CommentServiceImpl implements CommentService{

    private CommentRepository commentRepository;

    @Autowired
    public CommentServiceImpl(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Override
    public boolean addComment(int board_number, String contents) throws Exception {
        log.info("contents : {}" , contents);
        Map<String, Object> commentMap = new HashMap<>();
        commentMap.put("board_number", board_number);
        commentMap.put("contents", contents);

        return commentRepository.addComment(commentMap) > 0;
    }

    @Override
    public List<CommentRespDto> getCommentList(int board_number) throws Exception {
        List<Comment> comments = commentRepository.getCommentList(board_number);
        List<CommentRespDto> commentRespDtos = new ArrayList<>();
        CommentRespDto commentRespDto = null;
        for (Comment comment : comments) {
            commentRespDto = CommentRespDto.builder()
                    .user_name(comment.getUser_name())
                    .user_email(comment.getUser_email())
                    .comment_number(comment.getComment_number())
                    .board_number(comment.getBoard_number())
                    .user_code(comment.getUser_code())
                    .contents(comment.getContents())
                    .write_datetime(comment.getWrite_datetime())
                    .build();
            commentRespDtos.add(commentRespDto);
        }
//        log.info("commentDto : {} ", commentRespDto);
        return commentRespDtos;
    }
}
