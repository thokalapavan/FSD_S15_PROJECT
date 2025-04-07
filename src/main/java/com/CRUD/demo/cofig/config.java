package com.CRUD.demo.cofig;


import com.CRUD.demo.filter.filter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class config {

    @Bean
    public FilterRegistrationBean<filter> jwtFilter() {
        FilterRegistrationBean<filter> registrationBean = new FilterRegistrationBean<>();

        registrationBean.setFilter(new filter());
        registrationBean.addUrlPatterns("/secure/*"); // 👈 Only protect /secure paths
        registrationBean.setOrder(1); // Optional: order if multiple filters

        return registrationBean;
    }
}