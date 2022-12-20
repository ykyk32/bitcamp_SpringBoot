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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import user.bean.UserDTO;
import user.service.UserService;

@CrossOrigin
@RestController
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
	
	@GetMapping(value ="/writeForm")
	public String writeForm() {
		return"/user/writeForm";
	}
		
	@PostMapping(value="write")	
	public void write(@ModelAttribute UserDTO userDTO) {
		userService.write(userDTO);		
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
	@PostMapping(value="isExistId")	
	public String isExistId(@RequestParam String id) {
		return userService.isExistId(id);
	}
	@GetMapping(value="updateForm")
	public String updateForm() {
		return "user/updateForm";
	}
	
	@PostMapping(value="getUser")	
	public Optional<UserDTO>  getUser(@RequestParam String id) {
		return userService.getUser(id);
	}
	@PostMapping(value="update")	
	public void update(@ModelAttribute UserDTO userDTO) {
		userService.update(userDTO);		
	}
	@GetMapping(value="deleteForm")
	public String deleteForm() {
		return "user/deleteForm";
	}
	@PostMapping(value="delete")	
	public void delete(@RequestParam String id) {
		userService.delete(id);		
	}
	@PostMapping(value="search")	
	public List<UserDTO> search(@RequestParam Map<String,String> map) {//searchOption, keyword
		return userService.search(map);
	}
	*/
}
