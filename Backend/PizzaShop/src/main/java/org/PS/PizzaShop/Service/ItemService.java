package org.PS.PizzaShop.Service;

import java.util.List;

import org.PS.PizzaShop.Dao.Itemdao;
import org.PS.PizzaShop.Dao.OrderDao;
import org.PS.PizzaShop.Dto.DiaOrder;
import org.PS.PizzaShop.Dto.Items;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {
	@Autowired
	private Itemdao dao;
	@Autowired
	private OrderDao odao;
//	public void save(Items it,DiaOrder od) {
//		it.setOrder(od);
//		dao.save(it);
//	}
//	public void saveall(List<Items> it,DiaOrder od){
//		od.getItems().addAll(it);
//		for(Items i : it) {
//			i.setOrder(od);
//		}
//		dao.saveall(it);
//	}

}
