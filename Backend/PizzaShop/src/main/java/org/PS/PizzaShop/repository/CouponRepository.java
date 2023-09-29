package org.PS.PizzaShop.repository;

import java.util.Optional;

import org.PS.PizzaShop.Dto.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CouponRepository extends JpaRepository<Coupon, Integer>{
    @Query("select c from Coupon c where c.coupon=?1") 
	public Optional<Coupon> findbycode(String coupon);
}
