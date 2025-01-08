//package com.team4.teamproject.web.controller.decoder;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import org.springframework.beans.factory.annotation.Value;

//public class JwtDecoder {
//    @Value("${jwt.secret}")
//
//    public static String extractUserEmail(String jwtToken) {
//        try {
//            // 토큰 디코딩
//            Claims claims = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(jwtToken).getBody();
//
//            // 클레임에서 사용자 이메일 추출
//            return claims.getSubject();
//        } catch (Exception e) {
//            // 토큰 디코딩 실패 또는 예외 처리
//            e.printStackTrace();
//            return null;
//        }
//    }
//}
