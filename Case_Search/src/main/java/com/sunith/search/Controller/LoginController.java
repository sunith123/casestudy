
  package com.sunith.search.Controller;
  
  
  import org.springframework.context.annotation.Configuration; import
  org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
  import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
  
  @Configuration public class LoginController implements WebMvcConfigurer {
  
  @Override public void addViewControllers(ViewControllerRegistry registry) {
  registry.addViewController("/login").setViewName("login"); } }
 