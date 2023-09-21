package org.PS.PizzaShop.Dao;

import java.util.List;
import java.util.Optional;

import org.PS.PizzaShop.Dto.User;
import org.PS.PizzaShop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {
	@Autowired
	private UserRepository rep;
	public User save(User u) {
		return rep.save(u);
	}
	public User Update(User u) {
		return rep.save(u);
	}
	public Optional<User> findbyID(int id){
		return rep.findById(id);
	}
	public Optional<User> verifyUser(long phone, String password){
		return rep.verifyUser(phone, password);
	}
	public Optional<User> verifyUser(String email,String password){
		return rep.verifyUser(email, password);
	}
	public void delete(int id) {
		rep.deleteById(id);
	}
	public Optional<User> verifyUser(String email){
		
		return rep.verifyUser(email);
	}
}
