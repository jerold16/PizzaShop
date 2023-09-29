package org.PS.PizzaShop.controller;

import java.util.List;

import org.PS.PizzaShop.Dto.Coupon;
import org.PS.PizzaShop.Dto.ResponseStructre;
import org.PS.PizzaShop.Service.CouponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class CouponController {
	@Autowired
	private CouponService ser;
	@PostMapping("/coupon")
	public ResponseEntity<ResponseStructre<Coupon>> save(@RequestBody Coupon c){
		return ser.save(c);
	}
	@GetMapping("/allcoupon")
	public ResponseEntity<ResponseStructre<List<Coupon>>> fetchall(){
		return ser.fetchall();
	}
	@GetMapping("/coupon")
	public ResponseEntity<ResponseStructre<Coupon>> findbycoupon(@RequestParam String coupon){
		return ser.findbycode(coupon);
	}
	@PostMapping("/coupon/{id}")
	public ResponseEntity<ResponseStructre<Coupon>> findbycoupon(@PathVariable int id, @RequestParam int num){
		return ser.ChangeDiscount(id, num);
	}
}
