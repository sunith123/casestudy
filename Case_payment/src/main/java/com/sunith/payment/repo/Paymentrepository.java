package com.sunith.payment.repo;

import org.springframework.data.repository.CrudRepository;

import com.sunith.payment.model.payment;

public interface Paymentrepository extends CrudRepository<payment, String> {

}
