package com.team4.teamproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = SecurityAutoConfiguration.class)// security 로그인창 제거
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
