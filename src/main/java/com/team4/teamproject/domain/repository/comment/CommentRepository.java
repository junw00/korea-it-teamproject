package com.team4.teamproject.domain.repository.comment;

import com.team4.teamproject.domain.repository.recommend.Recommend;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface CommentRepository {
    int addComment(Map<String, Object> map) throws Exception;

    List<Comment> getCommentList(int board_number) throws Exception;
}
