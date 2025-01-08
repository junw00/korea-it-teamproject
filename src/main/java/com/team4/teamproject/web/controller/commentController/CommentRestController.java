package com.team4.teamproject.web.controller.commentController;

import com.team4.teamproject.service.comment.CommentService;
import com.team4.teamproject.web.dto.CMRespDto;
import com.team4.teamproject.web.dto.comment.response.CommentRespDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/recommend")
@Slf4j
public class CommentRestController {
    private CommentService commentService;

    @Autowired
    public CommentRestController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/{board_number}/comment")
    public ResponseEntity<?> addComment(@PathVariable int board_number, @RequestBody String contents) {
        log.info("comment: {}", contents);
        boolean result = false;
//        contents = contents.substring(1, contents.length() - 1);
        log.info("cont {}", contents);
        try {
            result = commentService.addComment(board_number, contents);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "fail", result));
        }
        return ResponseEntity.ok().body(new CMRespDto<>(1, "success", result));
    }

    @GetMapping("/{board_number}/comment-list")
    public ResponseEntity<?> getCommentList(@PathVariable int board_number) {
        List<CommentRespDto> commentRespDtoList = null;
        try {
            commentRespDtoList = commentService.getCommentList(board_number);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "fail", commentRespDtoList));
        }
        return ResponseEntity.ok().body(new CMRespDto<>(1, "success", commentRespDtoList));
    }

}
