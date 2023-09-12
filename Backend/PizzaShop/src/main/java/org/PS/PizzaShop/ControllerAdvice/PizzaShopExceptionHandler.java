package org.PS.PizzaShop.ControllerAdvice;

import org.PS.PizzaShop.Dto.ResponseStructre;
import org.PS.PizzaShop.Exception.IDNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class PizzaShopExceptionHandler extends ResponseEntityExceptionHandler {
@ExceptionHandler(IDNotFoundException.class)
	public ResponseEntity<ResponseStructre<String>> exceptione(IDNotFoundException e){
	ResponseStructre<String> res=new ResponseStructre<>();
	res.setData("Invalid ID");
	res.setMessage(e.getMessage());
	res.setStatuscode(HttpStatus.NOT_FOUND.value());
	return new ResponseEntity<ResponseStructre<String>>(res, HttpStatus.NOT_FOUND);
}
}
