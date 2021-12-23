package com.sunith.booking.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sunith.booking.Service.AvaliabilityService;
import com.sunith.booking.model.SeatAvaliability;
import com.sunith.booking.model.UserDetail;

@RestController
public class AddVacancyController {
	
	@Autowired
	AvaliabilityService Services;
	
	// add vacancy list
	@PostMapping("/addvacancy")
	public void  Seats(@RequestBody SeatAvaliability seat) {
		Services.save(seat);		
	}
	
	//get particular flights passengers
	@GetMapping("/flightusers/{id}")
	public List<UserDetail> getUserDetails(@PathVariable String id){
		return Services.getFlightUser(id);
		
	}
}
