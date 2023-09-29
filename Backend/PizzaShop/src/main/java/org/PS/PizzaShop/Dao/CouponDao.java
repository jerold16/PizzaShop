package org.PS.PizzaShop.Dao;

import java.util.List;
import java.util.Optional;

import org.PS.PizzaShop.Dto.Coupon;
import org.PS.PizzaShop.repository.CouponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CouponDao {
	@Autowired
	private CouponRepository rep;
	public Coupon save(Coupon c) {
		return rep.save(c);
	}
	public Optional<Coupon> findbyid(int id){
		return rep.findById(id);
	}
	public Optional<Coupon> findbyCoupon(String coupon){
		return rep.findbycode(coupon);
	}
	public List<Coupon> fetchall(){
		return rep.findAll();
	}

}
