package org.jsp.moneyexpenses.dao;

import java.util.Optional;

import org.jsp.moneyexpenses.dto.User;
import org.jsp.moneyexpenses.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {

	@Autowired
	private UserRepository r;
	
	public User saveUser(User u)
	{
		return r.save(u);
	}
	public User updateUser(User u)
	{
		return r.save(u);
	}
	
	public Optional<User> fetchById(int id) {
		return r.findById(id);
	}
	public User verifyUser(String email, String password)
	{
		return r.verify(email,password);
	}
	
	
}
