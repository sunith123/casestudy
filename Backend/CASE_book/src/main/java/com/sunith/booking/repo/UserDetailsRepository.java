package com.sunith.booking.repo;

import org.springframework.data.repository.CrudRepository;

import com.sunith.booking.model.UserDetail;



public interface UserDetailsRepository extends CrudRepository<UserDetail, String>  
{



	UserDetail findByUsername(String username);  
}