package user.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import user.bean.UserDTO;
import user.service.UserService;

@CrossOrigin
@RestController// @RestController = @Controller + @ResponseBody
@RequestMapping(value="user")
public class UserController {
	@Autowired
	private UserService userService;
	
	@GetMapping(value="getUserList")	
	public List<UserDTO> getUserList(){
		//DB연결가능하지만 비추
		return userService.getUserList();
	}
	
	/*
	//[방법1]
	@PostMapping(value="write")	
	public void write(@RequestBody UserDTO userDTO) {//@RequestBody - json형태로 들어와라 
		userService.write(userDTO);		
	}
	*/
	
	
	 //[방법2][방법3]
	 @PostMapping(value="write")	
	public void write(@ModelAttribute UserDTO userDTO) {
		userService.write(userDTO);		
	}
	
	//사용가능 아이디 체크
	@GetMapping(value="isExistId")	
	public String isExistId(@RequestParam String id) {
		return userService.isExistId(id);
	}
	
	//업데이트
	@GetMapping(value="getUser")	
	public Optional<UserDTO>  getUser(@RequestParam String id) {
		return userService.getUser(id);
	}
	
	@PostMapping(value="update")	
	public void update(@ModelAttribute UserDTO userDTO) {
		userService.update(userDTO);		
	}
	
	@GetMapping(value="delete")	
	public void delete(@RequestParam String id) {
		userService.delete(id);		
	}
	/*	
	  	
	
	@GetMapping(value ="/writeForm")
	public String writeForm() {
		return"/user/writeForm";
	}
		
	
	@GetMapping(value="list")
	public String list() {
		return "user/list";
	}
	@PostMapping(value="getUserList")	
	public List<UserDTO> getUserList(){
		//DB연결가능하지만 비추
		return userService.getUserList();
	}
	
	@GetMapping(value="updateForm")
	public String updateForm() {
		return "user/updateForm";
	}
	
	
	
	@GetMapping(value="deleteForm")
	public String deleteForm() {
		return "user/deleteForm";
	}
	
	@PostMapping(value="search")	
	public List<UserDTO> search(@RequestParam Map<String,String> map) {//searchOption, keyword
		return userService.search(map);
	}
	*/
}
