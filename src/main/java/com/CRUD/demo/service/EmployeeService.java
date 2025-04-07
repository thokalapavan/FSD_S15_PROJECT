package com.klu.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.User;

import com.CRUD.demo.repository.EmployeeRepo;
import com.CRUD.demo.util.util;
import com.klu.Utils.JwtUtil;

@Service
public class EmployeeService {
 
 @Autowired
 private EmployeeRepo UserRepo;
 @Autowired
 private util jwtUtil;
 
 public String registerUser(user user) {
  if(UserRepo.existsByEmail(user.getEmail())) {
   return "Email already exists";
  }else
  {
   UserRepo.save(user);
   return "User Registered successfully";
  }
 }
 public String loginUser(String email, String password) {
     Optional<User> userOptional = UserRepo.findByEmail(email);
     if (userOptional.isPresent() && userOptional.get().getPassword().equals(password)) {
         return jwtUtil.generateToken(email);
     }
     return null;
 }
}