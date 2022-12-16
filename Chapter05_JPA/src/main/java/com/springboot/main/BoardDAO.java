package com.springboot.main;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//public interface BoardDAO extends JpaRepository<BoardDTO, String> {//<엔티티클래스 타입, primary key의 type>
public interface BoardDAO extends JpaRepository<BoardDTO, Long>{
	
}
