package com.team4.teamproject.web.controller.api;


import com.team4.teamproject.service.auth.AuthServiceLJW;
import com.team4.teamproject.web.dto.auth.SignInReqDtoLJW;
import com.team4.teamproject.web.dto.auth.SignInRespDtoLJW;
import com.team4.teamproject.web.filter.JwtFilter;
import com.team4.teamproject.web.provider.JwtUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


import com.team4.teamproject.service.auth.PrincipalDetails;
import com.team4.teamproject.service.auth.PrincipalDetailsService;
import com.team4.teamproject.web.dto.CMRespDto;
import com.team4.teamproject.web.dto.auth.SignupReqDto;
import com.team4.teamproject.web.dto.auth.UsernameCheckReqDto;

import lombok.RequiredArgsConstructor;


//@RestController
//@RequestMapping("/api/v1/auth")
@RestController
@RequiredArgsConstructor
@Slf4j
public class AuthControllerLJW {
    private final PrincipalDetailsService principalDetailsService;
    private final AuthServiceLJW authServiceLJW;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupReqDto signupReqDto, BindingResult bindingResult) {
		System.out.println(signupReqDto);
        boolean staus = false;

        try {
            staus = principalDetailsService.addUser(signupReqDto);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "회원가입 실패", staus));
        }
        return ResponseEntity.ok().body(new CMRespDto<>(1, "회원가입 성공", staus));
    }

    //로그인
    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody SignInReqDtoLJW signInReqDtoLJW) {
//        log.info("SignInReqDto: {} {}", signInReqDtoLJW.getEmail(), signInReqDtoLJW.getPassword());
        SignInRespDtoLJW signInRespDtoLJW = null;
        try {
            signInRespDtoLJW = authServiceLJW.signin(signInReqDtoLJW);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "로그인 불가능", signInRespDtoLJW));
        }
        return ResponseEntity.ok().body(new CMRespDto<>(1, "로그인 가능", signInRespDtoLJW));
    }

    @GetMapping("/loadPage")
    public ResponseEntity<?> loadPage() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        SignInRespDtoLJW signInRespDtoLJW = null;
        log.info("user_email: {}" , authentication.getPrincipal());
        String user_email = String.valueOf(authentication.getPrincipal());
        try {
            signInRespDtoLJW = authServiceLJW.loadPage(user_email);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "fail", signInRespDtoLJW));
        }
        return ResponseEntity.ok().body(new CMRespDto<>(1, "success", signInRespDtoLJW));
    }
    
    //email 중복체크
  @GetMapping("/signup/validation/email")
  public ResponseEntity<?> checkUseremail(UsernameCheckReqDto usernameCheckReqDto){
      boolean status = false;

      System.out.println(usernameCheckReqDto);

      try {

          status = authServiceLJW.checkUseremail(usernameCheckReqDto);
      } catch (Exception e) {
          e.printStackTrace();


          return ResponseEntity.ok().body(new CMRespDto<>(-1, "에러 발생", status));

      }

      return ResponseEntity.ok().body(new CMRespDto<>(1, "중복확인 가능", status));

  }

  //닉네임 중복체크
  @GetMapping("/signup/validation/username")
  public ResponseEntity<?> checkUsername(UsernameCheckReqDto usernameCheckReqDto){
      boolean status = false;

      System.out.println(usernameCheckReqDto);

      try {

          status = authServiceLJW.checkUsername(usernameCheckReqDto);
      } catch (Exception e) {
          e.printStackTrace();

          return ResponseEntity.ok().body(new CMRespDto<>(-1, "회원가입 불가능", status));

      }
      System.out.println(status);
      return ResponseEntity.ok().body(new CMRespDto<>(1, "회원가입 가능", status));

  }

}
//   
//    @GetMapping("/principal")
//    public ResponseEntity<?> getPrincipal(@AuthenticationPrincipal PrincipalDetails principDetails){
//        System.out.println(principDetails);
//        if(principDetails == null) {
//            return ResponseEntity.badRequest().body(new CMRespDto<>(-1, "principal is null", null));
//        }
//        return ResponseEntity.ok(new CMRespDto<>(1, "success load", principDetails.getUser()));
//    }
//
//
//}
