package org.PS.PizzaShop.Service;

import java.lang.StackWalker.Option;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.PS.PizzaShop.Dao.Itemdao;
import org.PS.PizzaShop.Dao.OrderDao;
import org.PS.PizzaShop.Dao.UserDao;
import org.PS.PizzaShop.Dto.DiaOrder;
import org.PS.PizzaShop.Dto.Items;
import org.PS.PizzaShop.Dto.ResponseStructre;
import org.PS.PizzaShop.Dto.User;
import org.PS.PizzaShop.Exception.IDNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
	@Autowired
	private OrderDao dao;
	@Autowired
	private UserDao udao;
	@Autowired
	private Itemdao idao;
	@Autowired
	private ItemService ser;
	public ResponseEntity<ResponseStructre<DiaOrder>> order(int id,DiaOrder o){
		ResponseStructre<DiaOrder> res=new ResponseStructre<>();
		Optional<User> resu= udao.findbyID(id);
		if(resu.isPresent()) {
			User u=resu.get();
			u.getOrders().add(o);
			o.setUser(u);
			List<Items> items=o.getItems();
			for(Items i : items) {
				i.setOrder(o);
			}
			udao.Update(u);
			dao.save(o);
			res.setData(o);
			res.setMessage("Order has been placed");
			res.setStatuscode(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponseStructre<DiaOrder>>(res,HttpStatus.CREATED);
		}
		throw new IDNotFoundException();
	}
	public ResponseEntity<ResponseStructre<List<DiaOrder>>> saveall(int id,List<DiaOrder> o){
		ResponseStructre<List<DiaOrder>> res=new ResponseStructre<>();
		Optional<User> resu=udao.findbyID(id);
		if(resu.isPresent()) {
			User u=resu.get();
			u.getOrders().addAll(o);
			for(DiaOrder f : o) {
				f.setUser(u);
			}
			udao.Update(u);
			dao.addall(o);
			res.setData(o);
			res.setMessage("Order has been placed");
			res.setStatuscode(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponseStructre<List<DiaOrder>>>(res,HttpStatus.CREATED);		
		}
		throw new IDNotFoundException();
	}
	public ResponseEntity<ResponseStructre<DiaOrder>> update(int id,DiaOrder o){
		ResponseStructre<DiaOrder> res=new ResponseStructre<>();
		Optional<User> resu= udao.findbyID(id);
		if(resu.isPresent()) {
			User u=resu.get();
			o.setUser(u);
			dao.save(o);
			res.setData(o);
			res.setMessage("Order has been updated");
			res.setStatuscode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructre<DiaOrder>>(res,HttpStatus.ACCEPTED);
		}
		throw new IDNotFoundException();
	}
	public ResponseEntity<ResponseStructre<DiaOrder>> findbyid(int id){
		ResponseStructre<DiaOrder> reso=new ResponseStructre<>();
		Optional<DiaOrder> oo=dao.findbyid(id);
		if(oo.isPresent()) {
			
			reso.setData(oo.get());
			reso.setMessage("ID has been found");
			reso.setStatuscode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructre<DiaOrder>>(reso,HttpStatus.OK);
		}
		throw new IDNotFoundException();	}
      public ResponseEntity<ResponseStructre<String>> delete(int id){
    	  ResponseStructre<String> reso=new ResponseStructre<>();
  		Optional<DiaOrder> oo=dao.findbyid(id);
  		if(oo.isPresent()) {
  			dao.cancel(id);
  			reso.setData("order has been canceled");
  			reso.setMessage("ID has been found");
  			reso.setStatuscode(HttpStatus.OK.value());
  			return new ResponseEntity<ResponseStructre<String>>(reso,HttpStatus.OK);
  		}
  		throw new IDNotFoundException();
      }
      
}

