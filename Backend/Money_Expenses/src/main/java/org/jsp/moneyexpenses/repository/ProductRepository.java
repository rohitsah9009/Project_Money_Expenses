package org.jsp.moneyexpenses.repository;

import java.util.List;

import org.jsp.moneyexpenses.dto.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	@Query("select p from Product p where p.u.id=?1")
	
	List<Product> findAll(int u_id);

}
