//
//package com.team4.teamproject.web.controller.api;
//
//import java.util.List;
//
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
//import org.springframework.stereotype.Controller;
//import org.springframework.validation.BindingResult;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RestController;
//
//
//import com.team4.teamproject.domain.User;
//import com.team4.teamproject.service.auth.AuthService;
//import com.team4.teamproject.service.auth.AuthServiceImpl;
//import com.team4.teamproject.service.auth.PrincipalDetails;
//import com.team4.teamproject.service.auth.PrincipalDetailsService;
//
//import com.team4.teamproject.web.dto.CMRespDto;
//import com.team4.teamproject.web.dto.auth.SignupReqDto;
//import com.team4.teamproject.web.dto.auth.UsernameCheckReqDto;
//
//import jakarta.validation.Valid;
//
//import lombok.RequiredArgsConstructor;
//import lombok.extern.java.Log;
//
//
//
////@RestController
//@RequestMapping("/api/v1/auth")
//@Controller
//@ResponseBody
//@RequiredArgsConstructor
//@Slf4j
//public class AuthController {
//	private final PrincipalDetailsService principalDetailsService;
//	private final AuthService authService;
//
//
//	@PostMapping("/signup")
//	public ResponseEntity<?> signup(@RequestBody SignupReqDto signupReqDto, BindingResult bindingResult) {
////		System.out.println(signupReqDto);
//		boolean staus = false;
//
//
//		try {
//			staus = principalDetailsService.addUser(signupReqDto);
//
//		} catch (Exception e) {
//			e.printStackTrace();
//			return ResponseEntity.ok().body(new CMRespDto<>(-1, "회원가입 실패", staus));
//		}
//		return ResponseEntity.ok().body(new CMRespDto<>(1, "회원가입 성공", staus));
//	}
//
//	//로그인
//	@PostMapping("/signin")
//	public ResponseEntity<?> signin(@RequestBody UsernameCheckReqDto usernameCheckReqDto){
//		log.info("userNameDto: {}", usernameCheckReqDto);
////		boolean status = false;
//		String email = null;
//		System.out.println(usernameCheckReqDto);
//		try {
//
////			status = authService.signin(usernameCheckReqDto);
//			email = authService.signin(usernameCheckReqDto);
//
//		} catch (Exception e) {
//			e.printStackTrace();
////			return ResponseEntity.ok().body(new CMRespDto<>(-1, "로그인 불가능", status));
//			return ResponseEntity.ok().body(new CMRespDto<>(-1, "로그인 불가능", email));
//		}
////		return ResponseEntity.ok().body(new CMRespDto<>(1, "로그인 가능", status));
//		return ResponseEntity.ok().body(new CMRespDto<>(1, "로그인 가능", email));
//	}
//
//
//
////		//email 중복체크
//	@GetMapping("/signup/validation/email")
//	public ResponseEntity<?> checkUseremail(UsernameCheckReqDto usernameCheckReqDto){
//		boolean status = false;
//
//		System.out.println(usernameCheckReqDto);
//
//		try {
//
//			status = authService.checkUseremail(usernameCheckReqDto);
//		} catch (Exception e) {
//			e.printStackTrace();
//
//
//			return ResponseEntity.ok().body(new CMRespDto<>(-1, "회원가입 불가능", status));
//
//		}
//
//		return ResponseEntity.ok().body(new CMRespDto<>(1, "회원가입 가능", status));
//
//	}
//
//	//닉네임 중복체크
//	@GetMapping("/signup/validation/username")
//	public ResponseEntity<?> checkUsername(UsernameCheckReqDto usernameCheckReqDto){
//		boolean status = false;
//
//		System.out.println(usernameCheckReqDto);
//
//		try {
//
//			status = authService.checkUsername(usernameCheckReqDto);
//		} catch (Exception e) {
//			e.printStackTrace();
//
//			return ResponseEntity.ok().body(new CMRespDto<>(-1, "회원가입 불가능", status));
//
//		}
//		System.out.println(status);
//		return ResponseEntity.ok().body(new CMRespDto<>(1, "회원가입 가능", status));
//
//	}
//
//	@GetMapping("/principal")
//	public ResponseEntity<?> getPrincipal(@AuthenticationPrincipal PrincipalDetails principDetails){
//		System.out.println(principDetails);
//		if(principDetails == null) {
//			return ResponseEntity.badRequest().body(new CMRespDto<>(-1, "principal is null", null));
//		}
//		return ResponseEntity.ok(new CMRespDto<>(1, "success load", principDetails.getUser()));
//	}
//
//
//}
