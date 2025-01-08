package com.team4.teamproject.service.auth;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.team4.teamproject.domain.User;
import com.team4.teamproject.domain.repository.UserRepository;
import com.team4.teamproject.domain.repository.user.UserRepositoryLJW;
import com.team4.teamproject.web.dto.auth.SignupReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService{
	
	private final UserRepository userRepository;
	private final UserRepositoryLJW userRepositoryLJW;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User userEntity = null;
		try {
			userEntity = userRepository.findUserByUsername(username);
		} catch (Exception e) {
			e.printStackTrace();
			throw new UsernameNotFoundException(username);
		}
		if(userEntity == null) {
			throw new UsernameNotFoundException(username + "사용자 이름을 찾을 수 없습니다. ");
		}
		return new PrincipalDetails(userEntity);
	}
	
	
	public boolean addUser(SignupReqDto signupReqDto) throws Exception {	
		
		
		
		return userRepositoryLJW.save(signupReqDto.toEntity()) > 0;		
		

	}

	
	
}















