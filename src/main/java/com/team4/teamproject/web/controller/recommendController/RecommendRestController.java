package com.team4.teamproject.web.controller.recommendController;



import com.team4.teamproject.service.recommend.RecommendService;
import com.team4.teamproject.web.dto.CMRespDto;
import com.team4.teamproject.web.dto.recommendDto.AddRecommendReqDto;
import com.team4.teamproject.web.dto.recommendDto.GetRecommendRespDto;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/recommend")
@Slf4j
public class RecommendRestController {

    private final RecommendService recommendService;
    @Autowired
    public RecommendRestController(RecommendService recommendService) {
        this.recommendService = recommendService;
    }

    // 게시물 리스트 가져오기
    @GetMapping("board_list/{location}")
    public ResponseEntity<?> getRecommendList(@PathVariable String location) {
//        log.info("{}", location);
        List<GetRecommendRespDto> recommendList = null;
        try {
            recommendList = recommendService.getRecommendList(location);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "fail", recommendList));
        }
        return ResponseEntity.ok().body(new CMRespDto<>(1, "success", recommendList));
    }

//    게시물 상세보기
    @GetMapping("/{board_number}")
    public ResponseEntity<?> getRecommend(@PathVariable int board_number) {
        GetRecommendRespDto getRecommendRespDto = null;
        try {
            getRecommendRespDto = recommendService.getRecommend(board_number);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "fail", getRecommendRespDto));
        }
        return ResponseEntity.ok().body(new CMRespDto<>(1, "success", getRecommendRespDto));
    }
//
//    @GetMapping("/{board_number}/comment-list")
//    public ResponseEntity<?> getComment(@PathVariable int board_number) {
//
//        return null;
//    }

    // 지역에 대한 게시글 수
    @GetMapping("/board_list/{location}/count")
    public ResponseEntity<?> getRecommendCount(@PathVariable String location) {
        int countRecommend = -1;
        try {
            countRecommend = recommendService.getCountRecommend(location);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "fail", countRecommend));
        }
        return ResponseEntity.ok().body(new CMRespDto<>(1, "success", countRecommend));
    }


    @PostMapping("/write")
    public ResponseEntity<?> addNotice(@RequestBody AddRecommendReqDto addRecommendReqDto) {
        boolean result = false;
        try {
            result = recommendService.write(addRecommendReqDto);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "fail", result));
        }
        return ResponseEntity.ok().body(new CMRespDto<>(1, "success", result));
    }

//    @PatchMapping("/{board_number}")
//    public ResponseEntity<?> updateRecommend(@PathVariable int board_number) {
//
//        return null;
//    }
//
//    @DeleteMapping("/{board_number}")
//    public ResponseEntity<?> deleteRecommend(@PathVariable int board_number) {
//
//        return null;
//    }
}
