package com.team4.teamproject.web.dto.auth;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class SignInRespDtoLJW {
    private int user_code;
    private String user_email;
    private String user_name;
    private String user_password;
    private String user_tel;
    private String token;
}
