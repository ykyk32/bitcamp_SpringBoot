package com.springboot.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ComponentScan(basePackages = {"com.springboot.main","main.controller","user.*"})
@EntityScan("user.bean")
@EnableJpaRepositories("user.dao")
@SpringBootApplication
public class Chapter07JpaReactApplication {

	public static void main(String[] args) {
		SpringApplication.run(Chapter07JpaReactApplication.class, args);
	}

}
