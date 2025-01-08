package com.team4.teamproject.service.auth;

import com.team4.teamproject.domain.repository.user.UserLJW;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Data
public class PrincipalDetailsLJW implements UserDetails {

    private UserLJW userLJW;
    public PrincipalDetailsLJW(UserLJW user) {
        this.userLJW = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return userLJW.getUser_password();
    }

    @Override
    public String getUsername() {
        return userLJW.getUser_email();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
