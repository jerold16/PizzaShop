package org.PS.PizzaShop.Dao;

import java.util.List;
import java.util.Optional;

import org.PS.PizzaShop.Dto.DiaOrder;
import org.PS.PizzaShop.repository.Orderrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class OrderDao {
	@Autowired
	private Orderrepository rep;
	public DiaOrder save(DiaOrder o) {
		return rep.save(o);
	}
	public List<DiaOrder> addall(List<DiaOrder> o){
		return rep.saveAll(o);
	}
	public DiaOrder update(DiaOrder o) {
		return rep.save(o);
	}
	public Optional<DiaOrder> findbyid(int id){
		return rep.findById(id);
	}
	public void cancel(int id) {
		rep.deleteById(id);
	}

}
