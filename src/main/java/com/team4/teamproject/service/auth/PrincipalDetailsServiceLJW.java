package com.team4.teamproject.service.auth;

import com.team4.teamproject.domain.repository.user.UserLJW;
import com.team4.teamproject.domain.repository.user.UserRepositoryLJW;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
@Slf4j
public class PrincipalDetailsServiceLJW implements UserDetailsService {

    private final UserRepositoryLJW userRepositoryLJW;
    @Override
    public UserDetails loadUserByUsername(String user_email) throws UsernameNotFoundException {
        log.info("user_email: {}", user_email);
        UserLJW userEntity = null;

        try {
            userEntity = userRepositoryLJW.checkUserEmail(user_email);
        } catch (Exception e) {
            e.printStackTrace();
            throw new UsernameNotFoundException(user_email);
        }
        return new PrincipalDetailsLJW(userEntity);
    }
}
