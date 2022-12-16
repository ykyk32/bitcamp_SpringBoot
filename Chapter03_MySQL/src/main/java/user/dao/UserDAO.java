package user.dao;

import java.util.List;

import user.bean.UserDTO;

public interface UserDAO {

	public void write(UserDTO userDTO);

	public List<UserDTO> getUserList();

	public UserDTO getUser(String id);

	public void update(UserDTO userDTO);

	public void delete(String id);

}
