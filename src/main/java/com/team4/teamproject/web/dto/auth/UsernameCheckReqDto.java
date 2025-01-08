package com.team4.teamproject.web.dto.auth;

import com.team4.teamproject.domain.User;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UsernameCheckReqDto {
	
	@NotBlank(message = "빈값일 수 없습니다.")
	@Size(max = 16, min = 1)
	private String username;
	
	@NotBlank(message = "빈값일 수 없습니다.")
	private String email;
	
	@NotBlank(message = "빈값일 수 없습니다.")
	private String password;
	
	
	

	
	
}
