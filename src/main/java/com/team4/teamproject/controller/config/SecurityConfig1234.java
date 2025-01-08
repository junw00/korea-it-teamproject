package com.team4.teamproject.controller.config;

//import com.team4.teamproject.service.auth.AuthService;
import com.team4.teamproject.service.auth.AuthServiceLJW;
import com.team4.teamproject.service.auth.PrincipalDetailsLJW;
import com.team4.teamproject.service.auth.PrincipalDetailsServiceLJW;
import com.team4.teamproject.web.filter.JwtFilter;
import com.team4.teamproject.web.provider.JwtProvider;
import com.team4.teamproject.web.provider.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig1234 {

    private JwtUtil jwtUtil;
    @Value("${jwt.secret}")
    private String secretKey;
    
    
    
    
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() throws Exception{
    	return new BCryptPasswordEncoder();
    }
    
    


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http.httpBasic().disable()
                .csrf().disable()
                .cors().and()
                .authorizeRequests()
                .requestMatchers("/signin", "/signup").permitAll() // 로그인과 회원가입 기능은 허용
                .requestMatchers(HttpMethod.POST, "/recommend/write").authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilterBefore(new JwtFilter(jwtUtil, secretKey), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
