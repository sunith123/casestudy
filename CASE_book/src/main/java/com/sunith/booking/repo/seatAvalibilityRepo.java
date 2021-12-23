package com.sunith.booking.repo;

import org.springframework.data.repository.CrudRepository;

import com.sunith.booking.model.SeatAvaliability;

public interface seatAvalibilityRepo extends CrudRepository<SeatAvaliability, String>  {

}
