package com.team4.teamproject.service.auth;

import com.team4.teamproject.web.dto.auth.SignInReqDtoLJW;
import com.team4.teamproject.web.dto.auth.SignInRespDtoLJW;
import com.team4.teamproject.web.dto.auth.UsernameCheckReqDto;

public interface AuthServiceLJW {

    SignInRespDtoLJW signin(SignInReqDtoLJW signInReqDtoLJW) throws Exception;

    SignInRespDtoLJW loadPage(String user_email) throws Exception;

	boolean checkUseremail(UsernameCheckReqDto usernameCheckReqDto)throws Exception;

	boolean checkUsername(UsernameCheckReqDto usernameCheckReqDto)throws Exception;
}
