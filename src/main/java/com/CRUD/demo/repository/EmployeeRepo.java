package com.CRUD.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.CRUD.demo.model.Employee;
//import java.util.List;
import java.util.Optional;



public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
	 Optional<Employee> findByEname(String ename);  
}