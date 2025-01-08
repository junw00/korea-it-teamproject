package com.team4.teamproject.domain.repository.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserLJW {
    private int user_code;
    private String user_email;
    private String user_name;
    private String user_password;
    private String user_nickname;
    private String user_tel;
    private LocalDateTime create_date;
    private LocalDateTime update_date;

}
