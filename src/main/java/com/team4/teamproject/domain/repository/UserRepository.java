package com.team4.teamproject.domain.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.team4.teamproject.domain.User;

@Mapper
public interface UserRepository {
	
	public int save(User user) throws Exception; 
	
	public User findUserByUsername(String username) throws Exception;
	
	public User findUserByEmail(String email) throws Exception;
	
	public User signin(@Param("email") String email, @Param("password") String password) throws Exception;

	boolean existsByEmail(String email) throws Exception;
	
//	public User findOauth2UserByUsername(String oauth2_id) throws Exception;

}
