package org.PS.PizzaShop.controller;

import java.util.List;

import org.PS.PizzaShop.Dto.DiaOrder;
import org.PS.PizzaShop.Dto.ResponseStructre;
import org.PS.PizzaShop.Dto.User;
import org.PS.PizzaShop.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class OrderController {
	@Autowired
	private OrderService ser;
	@PostMapping("/order/{id}")
	public ResponseEntity<ResponseStructre<DiaOrder>> save(@PathVariable int id,@RequestBody DiaOrder o){
		return ser.order(id, o);
	}
	@PostMapping("/orderall/{id}")
	public ResponseEntity<ResponseStructre<List<DiaOrder>>> saveall(@PathVariable int id,@RequestBody List<DiaOrder> o){
		return ser.saveall(id, o);
	}
	@PutMapping("/order/{id}")
	public ResponseEntity<ResponseStructre<DiaOrder>> update(@PathVariable int id,@RequestBody DiaOrder o){
		return ser.update(id, o);
	}
	@GetMapping("/order/{id}")
	public ResponseEntity<ResponseStructre<DiaOrder>> findbyid(@PathVariable int id){
		return ser.findbyid(id);
	}
	@DeleteMapping("/order/{id}")
	public ResponseEntity<ResponseStructre<String>> delete(@PathVariable int id){
		return ser.delete(id);
	}

}
