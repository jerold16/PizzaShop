package org.PS.PizzaShop.repository;

import java.util.List;

import org.PS.PizzaShop.Dto.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
@Repository
public interface MenuRepository extends JpaRepository<Menu, Integer>{
   @Query("select m from Menu m where m.type=?1")
	public List<Menu> fetchbytype(String type);
}
