package org.PS.PizzaShop.Dao;

import java.util.List;
import java.util.Optional;

import org.PS.PizzaShop.Dto.Menu;
import org.PS.PizzaShop.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class MenuDao {
	@Autowired
	private MenuRepository mrep;
	public Menu Save(Menu m) {
		return mrep.save(m);
	}
	public Menu Update(Menu m) {
		return mrep.save(m);
	}
	public Optional<Menu> findByid(int id){
		return mrep.findById(id);
	}
	public List<Menu> findAll(){
		return mrep.findAll();
	}
	public List<Menu> fetchbytype(String type){
		return mrep.fetchbytype(type);
	}

}
