package org.PS.PizzaShop.controller;

import java.util.List;


import org.PS.PizzaShop.Dto.Menu;
import org.PS.PizzaShop.Dto.ResponseStructre;
import org.PS.PizzaShop.Service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.websocket.server.PathParam;

@RestController
@CrossOrigin
public class MenuController {
	@Autowired
	private MenuService ser;
	@PostMapping("/menu")
	public ResponseEntity<ResponseStructre<Menu>> save(@RequestBody Menu m){
		return ser.save(m);
	}
	@PutMapping("/menu")
	public ResponseEntity<ResponseStructre<Menu>> Update(@RequestBody Menu m){
		return ser.Update(m);
	}
	@GetMapping("/menu/{id}")
	public ResponseEntity<ResponseStructre<Menu>> findbyID(@PathVariable int id){
		return ser.findbyid(id);
	}
	@GetMapping("/menu")
	public ResponseEntity<ResponseStructre<List<Menu>>> findall(){
		return ser.findall();
	}
	@PostMapping("/menu/{id}")
	public ResponseEntity<ResponseStructre<Menu>> changetype(@PathVariable int id,@RequestParam String type){
		return ser.Changetype(id, type);
	}
	@PostMapping("/toppings/{id}")
	public ResponseEntity<ResponseStructre<Menu>> changetoppings(@PathVariable int id,@RequestParam String toppings){
		return ser.Changetoppings(id, toppings);
	}
	@GetMapping("/fetchbytype")
	public ResponseEntity<ResponseStructre<List<Menu>>> fetchbytype(@RequestParam String type){
		return ser.fetchbytype(type);
	}
	

}
