//package com.team4.teamproject.service.auth;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import com.team4.teamproject.web.provider.JwtProvider;
//import com.team4.teamproject.web.provider.JwtUtil;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//import com.team4.teamproject.domain.User;
//import com.team4.teamproject.domain.repository.UserRepository;
//import com.team4.teamproject.web.dto.auth.UsernameCheckReqDto;
//
//import lombok.RequiredArgsConstructor;
//
//@Service
//@RequiredArgsConstructor
//@Slf4j
//public class AuthServiceImpl implements AuthService {
//	private final UserRepository userRepository;
//	private final JwtUtil jwtUtil;
//	private Long expiredMs = 1000 * 60 * 60l;
//
//	@Value("${jwt.secret}")
//	private String secretKey;
//
//	@Override
//	public boolean checkUsername(UsernameCheckReqDto usernameCheckReqDto) throws Exception {
//
//		return userRepository.findUserByUsername(usernameCheckReqDto.getUsername())== null;
////		return false;
//	}
//
//	@Override
//	public boolean checkUseremail(UsernameCheckReqDto usernameCheckReqDto) throws Exception {
//
//		return userRepository.findUserByEmail(usernameCheckReqDto.getEmail()) == null;
//	}
//
//
//
//}
