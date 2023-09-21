package org.PS.PizzaShop.Service;

import java.util.List;
import java.util.Optional;

import org.PS.PizzaShop.Dao.UserDao;
import org.PS.PizzaShop.Dto.EmailConfiguration;
import org.PS.PizzaShop.Dto.ResponseStructre;
import org.PS.PizzaShop.Dto.User;
import org.PS.PizzaShop.Exception.IDNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;

@Service
public class UserService {
	@Autowired
	private UserDao dao;
	
	@Autowired
	private EmailConfiguration configuration;
	
	public ResponseEntity<ResponseStructre<User>> save(User u){
		ResponseStructre<User> res=new ResponseStructre<>();
		res.setData(dao.save(u));
		res.setMessage("User has been added");
		res.setStatuscode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructre<User>>(res,HttpStatus.CREATED);
	}
	public ResponseEntity<ResponseStructre<User>> Update (User u){
		ResponseStructre<User> res =new ResponseStructre<>();
		res.setData(dao.Update(u));
		res.setMessage("User has been added");
		res.setStatuscode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructre<User>>(res,HttpStatus.ACCEPTED);
	
	}
	public ResponseEntity<ResponseStructre<User>> findbyID(int id){
		ResponseStructre<User> res=new ResponseStructre<>();
		Optional<User> resu= dao.findbyID(id);
		if(resu.isPresent()) {
			res.setData(resu.get());
			res.setStatuscode(HttpStatus.OK.value());
			res.setMessage("Id found");
			return new ResponseEntity<ResponseStructre<User>>(res,HttpStatus.OK);
		}
		throw new IDNotFoundException();
	}
	public ResponseEntity<ResponseStructre<User>> verifyUser(String email,String passsword){
		ResponseStructre<User> res=new ResponseStructre<>();
		Optional<User> resu= dao.verifyUser(email, passsword);
		if(resu.isPresent()) {
			res.setData(resu.get());
			res.setStatuscode(HttpStatus.OK.value());
			res.setMessage("Id found");
			return new ResponseEntity<ResponseStructre<User>>(res,HttpStatus.OK);
		}
		throw new IDNotFoundException();
	}
	public ResponseEntity<ResponseStructre<User>> verifyUser(long phone,String passsword){
		ResponseStructre<User> res=new ResponseStructre<>();
		Optional<User> resu= dao.verifyUser(phone, passsword);
		if(resu.isPresent()) {
			res.setData(resu.get());
			res.setStatuscode(HttpStatus.OK.value());
			res.setMessage("Id found");
			return new ResponseEntity<ResponseStructre<User>>(res,HttpStatus.OK);
		}
		throw new IDNotFoundException();
	}
	public ResponseEntity<ResponseStructre<User>> verifyUser(String email){
		ResponseStructre<User> res=new ResponseStructre<>();
		Optional<User> resu= dao.verifyUser(email);
		if(resu.isPresent()) {
			res.setData(resu.get());
			res.setStatuscode(HttpStatus.OK.value());
			res.setMessage("Id found");
			return new ResponseEntity<ResponseStructre<User>>(res,HttpStatus.OK);
		}
		throw new IDNotFoundException();
	}
	public ResponseEntity<ResponseStructre<String>> delete(int id){
		ResponseStructre<String> res=new ResponseStructre<>();
		Optional<User> resu= dao.findbyID(id);
		if(resu.isPresent()) {
			dao.delete(id);
			res.setData("Id has been deleted");
			res.setStatuscode(HttpStatus.OK.value());
			res.setMessage("Id found");
			return new ResponseEntity<ResponseStructre<String>>(res,HttpStatus.OK);
		}
		throw new IDNotFoundException();
	}
	public ResponseEntity<ResponseStructre<User>> changepassword(int id, String password){
		Optional<User> resu=dao.findbyID(id);
		ResponseStructre<User> res=new ResponseStructre<>();
		if(resu.isPresent()) {
			User u=resu.get();
			u.setPassword(password);
			dao.Update(u);
			res.setData(u);
			res.setMessage("password has been updated");
			res.setStatuscode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructre<User>>(res,HttpStatus.ACCEPTED);
		}
		throw new IDNotFoundException();
	}
	

}
