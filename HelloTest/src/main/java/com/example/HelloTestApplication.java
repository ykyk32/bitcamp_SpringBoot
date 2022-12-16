package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication //스프링 부트로 만든 애플리케이션 시작 클래스임을 의미
public class HelloTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloTestApplication.class, args);
		
		System.out.println("Hello Spring Boot!!");
	}

}
