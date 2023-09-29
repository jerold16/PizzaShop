package org.PS.PizzaShop.Exception;

public class InvalidCouponException extends RuntimeException {
  @Override
public String getMessage() {
	// TODO Auto-generated method stub
	return "Invalid Coupon Number";
}
}
