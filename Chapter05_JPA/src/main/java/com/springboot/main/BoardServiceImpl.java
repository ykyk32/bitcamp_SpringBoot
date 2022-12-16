package com.springboot.main;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService {
	@Autowired
	private BoardDAO boardDAO;
	
	@Override
	public void write() {
		BoardDTO boardDTO = new BoardDTO();
		boardDTO.setId("neo");
		boardDTO.setName("네오");
		boardDTO.setSubject("홍길동전");
		boardDTO.setContent("불쌍한 사람들을 도우는 의적!!");
		
		boardDAO.save(boardDTO);//save()-JPA Repository가 가진 함수
		//insert문 안써도 DB에 들어간다
		//새로 안만들고 수정만 해도 알아서 추가해서 들어감 //update로 설정해서		
		
	}

	@Override
	public List<BoardDTO> getBoardList() {		
		return boardDAO.findAll();
	}

}
