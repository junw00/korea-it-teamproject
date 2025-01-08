package com.team4.teamproject.web.dto.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.team4.teamproject.domain.User;
import com.team4.teamproject.domain.repository.user.UserLJW;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class SignupReqDto {
	 
	
	
	
	
	@NotBlank
	@Pattern(regexp = "/^(([^<>()\\[\\].,;:\\s@\"]+(\\.[^<>()\\[\\].,;:\\s@\"]+)*)|(\".+\"))@(([^<>()[\\].,;:\\s@\"]+\\.)+[^<>()[\\].,;:\\s@\"]{2,})$/i")
	private String email;
	@NotBlank
	private String name;
	@NotBlank
	private String username;
	@NotBlank
	@Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[-~!@#$%^&*_+=])[a-zA-Z\\d-~!@#$%^&*_+=]{8,16}$")
	private String password;	
	private String tel;
	
	
	public UserLJW toEntity() {
		
		return UserLJW.builder()
					.user_email(email)
					.user_name(name)
					.user_password(new BCryptPasswordEncoder().encode(password)) //나중에 수정new BCryptPasswordEncoder().encode(password)
					.user_nickname(username)
					.user_tel(tel)
					.build();
		
					
	}

	
	
	
	

}
