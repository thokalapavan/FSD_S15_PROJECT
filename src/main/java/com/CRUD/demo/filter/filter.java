package com.CRUD.demo.filter;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;

import com.CRUD.demo.util.util;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


//@Component
public class filter implements Filter {
 
  @Autowired
  private util jwtUtil;

     @Override
     public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
         HttpServletRequest request = (HttpServletRequest) req;
         String authHeader = request.getHeader("Authorization");

         if (authHeader != null && authHeader.startsWith("Bearer ")) {
             String token = authHeader.substring(7);
             if (jwtUtil.validateToken(token)) {
                 chain.doFilter(req, res);
                 return;
             }
         }

         HttpServletResponse response = (HttpServletResponse) res;
         response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
         response.getWriter().write("Unauthorized");
     }

}