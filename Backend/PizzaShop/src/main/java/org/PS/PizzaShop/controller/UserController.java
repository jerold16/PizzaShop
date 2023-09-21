package org.PS.PizzaShop.controller;

import org.PS.PizzaShop.Dto.ResponseStructre;
import org.PS.PizzaShop.Dto.User;
import org.PS.PizzaShop.Service.UserService;
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
public class UserController {
	@Autowired
	private UserService ser;
	@PostMapping("/user")
	public ResponseEntity<ResponseStructre<User>> save(@RequestBody User u){
		return ser.save(u);
	}
	@PutMapping("/user")
	public ResponseEntity<ResponseStructre<User>> Update(@RequestBody User u){
		return ser.Update(u);
	}
	@GetMapping("/user/{id}")
	public ResponseEntity<ResponseStructre<User>> findbyid(@PathVariable int id){
		return ser.findbyID(id);
	}
	@PostMapping("/verifyemail")
	public ResponseEntity<ResponseStructre<User>> Verifyemail(@RequestParam String email,@RequestParam String password){
		return ser.verifyUser(email, password);
	}
	@PostMapping("/verifyphone")
	public ResponseEntity<ResponseStructre<User>> Verifyemail(@RequestParam long phone,@RequestParam String password){
		return ser.verifyUser(phone, password);
	}
	@GetMapping("/verifyemail")
	public ResponseEntity<ResponseStructre<User>> Verifyemail(@RequestParam String email){
		return ser.verifyUser(email);
	}
	@DeleteMapping("/user/{id}")
	public ResponseEntity<ResponseStructre<String>> delete(@PathVariable int id){
		return ser.delete(id);
	}
	@PutMapping("/changepassword/{id}")
	public ResponseEntity<ResponseStructre<User>> changepassword(@PathVariable int id , @RequestParam String password){
		return ser.changepassword(id, password);
	}
}
