package com.CRUD.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CRUD.demo.model.Employee;
import com.CRUD.demo.service.EmployeeService;

@RestController
@RequestMapping("/employee") // Optional: Adds a base URL prefix for better structuring
public class EmployeeController {

  @Autowired
  private EmployeeService employeeService;

  @PostMapping("/addemployee")
  public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
    Employee savedEmployee = employeeService.saveEmployee(employee);
    return ResponseEntity.ok(savedEmployee);
  }
  
  @PutMapping("/update/{ename}")
  public Employee updateEmployee(@PathVariable String ename,@RequestBody Employee employee) {
	  return employeeService.updateEmployee(ename, employee);
  }
  @GetMapping("/retrieveall")
  public List<Employee> getAllEmployee(){
   return employeeService.getAllEmployees();
  }
  @GetMapping("/retrieve/{eid}")
  public Optional<Employee> getEmployee(@PathVariable int eid) {
   return employeeService.getEmployee(eid);
  }
  @DeleteMapping("/delete/{eid}")
  public String deleteEmployee(@PathVariable int eid) {
   employeeService.deleteEmployee(eid);
   return "Employee with "+ eid + " deleted";
  }
  @DeleteMapping("/deleteall")
  public String deleteAllEmployees() {
   employeeService.deleteAllEmployees();
   return "All employee records deleted";
  }
}
