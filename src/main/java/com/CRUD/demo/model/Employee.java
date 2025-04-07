package com.CRUD.demo.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Employee {
    
 @Id
 @GeneratedValue(strategy=GenerationType.IDENTITY)
 private int eid;
 private String ename;
 private float esal;
 private String email;
 
 public Employee() {
 }
 
 public Employee(int eid, String ename, float esal, String email) {
	  super();
	  this.eid = eid;
	  this.ename = ename;
	  this.esal = esal;
	  this.email = email;
	 }

public int getEid() {
	return eid;
}

public void setEid(int eid) {
	this.eid = eid;
}

public String getEname() {
	return ename;
}

public void setEname(String ename) {
	this.ename = ename;
}

public float getEsal() {
	return esal;
}

public void setEsal(float esal) {
	this.esal = esal;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}
 
 
}