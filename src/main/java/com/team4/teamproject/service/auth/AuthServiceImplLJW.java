package com.team4.teamproject.service.auth;

import java.util.ArrayList;
import java.util.List;

import com.team4.teamproject.domain.repository.user.UserLJW;
import com.team4.teamproject.domain.repository.user.UserRepositoryLJW;
import com.team4.teamproject.web.dto.auth.SignInReqDtoLJW;
import com.team4.teamproject.web.dto.auth.SignInRespDtoLJW;
import com.team4.teamproject.web.provider.JwtProvider;
import com.team4.teamproject.web.provider.JwtUtil;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.team4.teamproject.domain.User;
import com.team4.teamproject.domain.repository.UserRepository;
import com.team4.teamproject.web.dto.auth.UsernameCheckReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImplLJW implements AuthServiceLJW {
    private final UserRepositoryLJW userRepositoryLJW;
    private final JwtUtil jwtUtil;
    private Long expiredMs = 1000 * 60 * 60l;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Value("${jwt.secret}")
    private String secretKey;


    @Override
    public SignInRespDtoLJW signin(SignInReqDtoLJW signInReqDtoLJW) throws Exception {
        // 유저가 로그인창에서 입력한 아이디와 비밀번호
        UserLJW user = UserLJW.builder().user_email(signInReqDtoLJW.getEmail())
                .user_password(signInReqDtoLJW.getPassword())
                .build();
        
        SignInRespDtoLJW signInRespDtoLJW = null;
        
        // 유저가 입력한 아이디가 데이터베이스에 존재 여부
        UserLJW user1 = userRepositoryLJW.signin(user);
        log.info("signInReqDto: {}== {}", signInReqDtoLJW.getPassword(), user1.getUser_password());
//        log.info("user1:{}", user1);
        if(user1 == null) {
//            log.info("signInRespDtoLJW: {}", signInRespDtoLJW);
            return signInRespDtoLJW;
//        } else if (!signInReqDtoLJW.getPassword().equals(user1.getUser_password())) {
        } else if (!bCryptPasswordEncoder.matches(user.getUser_password(), user1.getUser_password())) {
//            log.info("else if {}", signInRespDtoLJW);
            return signInRespDtoLJW;
        }
        String token = jwtUtil.createJwt(user1.getUser_email(), secretKey, expiredMs);
        signInRespDtoLJW = SignInRespDtoLJW.builder()
                .user_code(user1.getUser_code())
                .user_name(user1.getUser_name())
                .user_email(user1.getUser_email())
                .user_password(user1.getUser_password())
                .user_tel(user1.getUser_tel())
                .token(token)
                .build();
//        log.info("통과 signInRespDtoLJW: {}", signInRespDtoLJW);
        return signInRespDtoLJW;
    }

    @Override
    public SignInRespDtoLJW loadPage(String user_email) throws Exception {
        UserLJW userLJW = userRepositoryLJW.getUserInfo(user_email);

        return SignInRespDtoLJW.builder()
                .user_name(userLJW.getUser_name())
                .user_code(userLJW.getUser_code())
                .user_email(userLJW.getUser_email())
                .user_tel(userLJW.getUser_tel())
                .user_password(userLJW.getUser_password())
                .build();
    }
    
    @Override
    public boolean checkUseremail(UsernameCheckReqDto usernameCheckReqDto) throws Exception {
    	return userRepositoryLJW.findUserByEmail(usernameCheckReqDto.getEmail()) == null;
    }
    
    @Override
    public boolean checkUsername(UsernameCheckReqDto usernameCheckReqDto) throws Exception {
    	return userRepositoryLJW.findUserByUsername(usernameCheckReqDto.getUsername()) == null;
    }
}
