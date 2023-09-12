package org.PS.PizzaShop.Exception;

public class IDNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public String getMessage() {
		// TODO Auto-generated method stub
		return "Id not found" ;
	}
}
