package com.team4.teamproject.domain.repository.user;

import org.apache.ibatis.annotations.Mapper;

import com.team4.teamproject.domain.User;

@Mapper
public interface UserRepositoryLJW {

    UserLJW signin(UserLJW user) throws Exception;

    UserLJW checkUserEmail(String user_email) throws Exception;

    UserLJW getUserInfo(String user_email) throws Exception;

	UserLJW findUserByEmail(String email)throws Exception;

	UserLJW findUserByUsername(String username)throws Exception;

	int save(UserLJW userLJW)throws Exception;
}
