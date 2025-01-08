//package com.team4.teamproject.web.filter;
//
//import com.team4.teamproject.service.auth.AuthService;
//import org.springframework.security.authentication.AbstractAuthenticationToken;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.authority.AuthorityUtils;
//import org.springframework.security.core.context.SecurityContext;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.web.authentication.WebAuthenticationDetails;
//import org.springframework.stereotype.Component;
//import org.springframework.util.StringUtils;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import com.team4.teamproject.domain.repository.UserRepository;
//import com.team4.teamproject.web.provider.JwtProvider;
//
//import java.io.IOException;
//
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import lombok.RequiredArgsConstructor;
//
//@Component
//@RequiredArgsConstructor
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//
//  private final JwtProvider jwtProvider;
//
//  private final AuthService authService;
//  private final String secretKey;
//
//  @Override
//  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//      throws ServletException, IOException {
//
//    try {
//      // 토큰을 넘겨 받는다.
//      String token = parseBearerToken(request);
//
//      // token이 null이면 리턴
//      if (token == null) {
//        filterChain.doFilter(request, response);
//        return;
//      }
//      // token이 null이 아니면 ema
//      String email = jwtProvider.validate(token);
//
//      if (email == null) {
//        filterChain.doFilter(request, response);
//        return;
//      }
//
//      AbstractAuthenticationToken authenticationToken =
//        new UsernamePasswordAuthenticationToken(email, null, AuthorityUtils.NO_AUTHORITIES);
//      authenticationToken.setDetails(new WebAuthenticationDetails(request));
//
//      SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
//      securityContext.setAuthentication(authenticationToken);
//
//      SecurityContextHolder.setContext(securityContext);
//
//    } catch (Exception exception) {
//      exception.printStackTrace();
//    }
//
//    filterChain.doFilter(request, response);
//
//  }
//
//  private String parseBearerToken(HttpServletRequest request) {
//
//    String authorization = request.getHeader("Authorization");
//
//    boolean hasAuthorization = StringUtils.hasText(authorization);
//    if (!hasAuthorization) return null;
//
//    boolean isBearer = authorization.startsWith("Bearer ");
//    if (!isBearer) return null;
//
//    String token = authorization.substring(7);
//    return token;
//
//  }
//
//}