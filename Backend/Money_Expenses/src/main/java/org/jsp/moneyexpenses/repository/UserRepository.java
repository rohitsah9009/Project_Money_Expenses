package org.jsp.moneyexpenses.repository;

import org.jsp.moneyexpenses.dto.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer>{

	@Query("select u from User u where u.email=?1 and u.password=?2")
	User verify(String email, String password);

}
