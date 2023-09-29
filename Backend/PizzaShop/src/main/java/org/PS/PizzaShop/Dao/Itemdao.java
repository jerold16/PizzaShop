package org.PS.PizzaShop.Dao;

import java.util.List;

import org.PS.PizzaShop.Dto.Items;
import org.PS.PizzaShop.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class Itemdao {
	@Autowired
	private ItemRepository rep;
	public Items save(Items i) {
		return rep.save(i);
	}
	public List<Items> saveall(List<Items> i) {
		return rep.saveAll(i);
	}

}
