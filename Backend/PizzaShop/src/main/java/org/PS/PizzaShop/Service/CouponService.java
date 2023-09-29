package org.PS.PizzaShop.Service;

import java.util.List;
import java.util.Optional;

import org.PS.PizzaShop.Dao.CouponDao;
import org.PS.PizzaShop.Dto.Coupon;
import org.PS.PizzaShop.Dto.ResponseStructre;
import org.PS.PizzaShop.Exception.IDNotFoundException;
import org.PS.PizzaShop.Exception.InvalidCouponException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CouponService {
	@Autowired
	private CouponDao dao;
	public ResponseEntity<ResponseStructre<Coupon>> save(Coupon c){
		ResponseStructre<Coupon> res=new ResponseStructre<>();
		res.setData(dao.save(c));
		res.setMessage("Coupon code added");
		res.setStatuscode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructre<Coupon>>(res,HttpStatus.CREATED);
	}
	public ResponseEntity<ResponseStructre<Coupon>> ChangeDiscount(int id,int num){
		ResponseStructre<Coupon> res=new ResponseStructre<>();
		Optional<Coupon> op=dao.findbyid(id);
		if(op.isPresent()) {
			Coupon c=op.get();
			c.setDiscount(num);
		res.setData(dao.save(c));
		res.setMessage("Coupon code discount changed");
		res.setStatuscode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructre<Coupon>>(res,HttpStatus.OK);
	}
		throw new IDNotFoundException();
	}
	public ResponseEntity<ResponseStructre<Coupon>> findbycode(String coupon){
		ResponseStructre<Coupon> res=new ResponseStructre<>();
		Optional<Coupon> op=dao.findbyCoupon(coupon);
		if(op.isPresent()) {
			Coupon c=op.get();
		res.setData(c);
		res.setMessage("Coupon found");
		res.setStatuscode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructre<Coupon>>(res,HttpStatus.OK);
	}
		throw new InvalidCouponException();
	}
	public ResponseEntity<ResponseStructre<List<Coupon>>> fetchall(){
		ResponseStructre<List<Coupon>> res=new ResponseStructre<>();
		List<Coupon> op=dao.fetchall();
		if(op!=null) {
		res.setData(op);
		res.setMessage("Coupons found");
		res.setStatuscode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructre<List<Coupon>>>(res,HttpStatus.OK);
	}
		throw new InvalidCouponException();
	}
	
}
