package org.jsp.moneyexpenses.controller;

import org.jsp.moneyexpenses.dto.ResponseStructure;
import org.jsp.moneyexpenses.dto.User;
import org.jsp.moneyexpenses.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class UserController {
	
	@Autowired
	private UserService s;
	
	@PostMapping("/users")
	public ResponseEntity<ResponseStructure<User>> save(@RequestBody User u)
	{
		return s.save(u);
	}
	@PutMapping("/users")
	public ResponseEntity<ResponseStructure<User>> update(@RequestBody User u)
	{
		return s.update(u);
	}
	
	@PostMapping("/users/verifyByEmail")
	public ResponseEntity<ResponseStructure<User>> verify(@RequestParam String email,@RequestParam String password)
	{
		return s.verify(email, password);
	}

	
}
