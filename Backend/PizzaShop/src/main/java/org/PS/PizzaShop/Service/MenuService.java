package org.PS.PizzaShop.Service;

import java.util.List;
import java.util.Optional;

import org.PS.PizzaShop.Dao.MenuDao;
import org.PS.PizzaShop.Dto.Menu;
import org.PS.PizzaShop.Dto.ResponseStructre;
import org.PS.PizzaShop.Exception.IDNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class MenuService {
	@Autowired
	private MenuDao mdao;
	public ResponseEntity<ResponseStructre<Menu>> save(Menu m) {
		ResponseStructre<Menu> resm=new ResponseStructre<>();
		resm.setData(mdao.Save(m));
		resm.setMessage("Item has been added into the Menu");
		resm.setStatuscode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructre<Menu>>(resm,HttpStatus.CREATED);	
	}
	public ResponseEntity<ResponseStructre<Menu>> Update(Menu m) {
		ResponseStructre<Menu> resm=new ResponseStructre<>();
		resm.setData(mdao.Update(m));
		resm.setMessage("Item has been updated into the Menu");
		resm.setStatuscode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructre<Menu>>(resm,HttpStatus.ACCEPTED);	
	}
	public ResponseEntity<ResponseStructre<Menu>> findbyid(int id) {
		ResponseStructre<Menu> resm=new ResponseStructre<>();
		Optional<Menu> om= mdao.findByid(id);
		if(om.isPresent()) 
		{
		resm.setData(om.get());
		resm.setMessage("Item has been added into the Menu");
		resm.setStatuscode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructre<Menu>>(resm,HttpStatus.CREATED);}
		throw new IDNotFoundException();
	}
	public ResponseEntity<ResponseStructre<List<Menu>>> findall(){
		ResponseStructre<List<Menu>> resm=new ResponseStructre<>();
		List<Menu> lm=mdao.findAll();
		if(lm!=null) {
			resm.setData(lm);
			resm.setMessage("all the data are fetched");
			resm.setStatuscode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructre<List<Menu>>>(resm,HttpStatus.OK);
		}
		throw new IDNotFoundException();
	}
	public ResponseEntity<ResponseStructre<Menu>> Changetype(int id,String type) {
		ResponseStructre<Menu> resm=new ResponseStructre<>();
		Optional<Menu> om= mdao.findByid(id);
		if(om.isPresent()) 
		{
			Menu m=om.get();
			m.setType(type);
		resm.setData(mdao.Update(m));
		resm.setMessage("Type has been changed into the Menu");
		resm.setStatuscode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructre<Menu>>(resm,HttpStatus.ACCEPTED);
		}

		throw new IDNotFoundException();
	}
	public ResponseEntity<ResponseStructre<Menu>> Changetoppings(int id,String toppings) {
		ResponseStructre<Menu> resm=new ResponseStructre<>();
		Optional<Menu> om= mdao.findByid(id);
		if(om.isPresent()) 
		{
			Menu m=om.get();
			m.setToppings(toppings);
		resm.setData(mdao.Update(m));
		resm.setMessage("Toppings has been changed into the Menu");
		resm.setStatuscode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructre<Menu>>(resm,HttpStatus.ACCEPTED);
		}

		throw new IDNotFoundException();
	}
	
	public ResponseEntity<ResponseStructre<List<Menu>>> fetchbytype(String type){
		ResponseStructre<List<Menu>> resm=new ResponseStructre<>();
		List<Menu> lm=mdao.fetchbytype(type);
		if(lm!=null) {
			resm.setData(lm);
			resm.setMessage("all the data are fetched");
			resm.setStatuscode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructre<List<Menu>>>(resm,HttpStatus.OK);
		}
		throw new IDNotFoundException();
	}
}
