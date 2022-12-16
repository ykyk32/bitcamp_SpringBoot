package user.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.bean.UserDTO;
import user.dao.UserDAO;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDAO userDAO;
	
	
	@Override
	public void write(UserDTO userDTO) {
		//DB
		//id 컬럼이 primary key로 설정되어 있기 때문에 
		//똑같은 아이디가 없으면 insert가 수행이되고, 아이디가 있으면 update로 수행된다.
		userDAO.save(userDTO);
		
	}

	@Override
	public List<UserDTO> getUserList() {		
		//DB		
		return userDAO.findAll();
		
	}

	@Override
	public String isExistId(String id) {		
		//DB
		Optional<UserDTO> userDTO = userDAO.findById(id);
		System.out.println(userDTO);//값이 없으면 Optional.empty 출력된다
		
		if(userDTO.isPresent())//isPresent()-값이 없으면 false
			return "exist";
		else 
			return "non_exist";
		
	}

//	@Override
//	public UserDTO getUser(String id) {
//		//DB
//		Optional<UserDTO> userDTO = userDAO.findById(id);
//		return userDTO.get();
//		
//	}
	
	@Override
	public Optional<UserDTO> getUser(String id) {
		//DB
		return userDAO.findById(id);
		
	}

	@Override
	public void update(UserDTO userDTO) {
		//DB
		userDAO.save(userDTO);
		
	}

	@Override
	public void delete(String id) {
		//DB
		//deleteById()는 내부적으로 findById()를 먼저 수행하고 delete를 수행한다.
		//만약 아이디가 없으면 EmptyResultDataAccessException이 발생한다.	
		
		//delete()는 findById() 수행하지 않고 바로 delete를 수행한다.
		userDAO.deleteById(id);
		
	}
	

}
