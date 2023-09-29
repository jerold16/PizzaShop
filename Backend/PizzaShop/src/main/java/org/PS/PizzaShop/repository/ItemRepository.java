package org.PS.PizzaShop.repository;

import org.PS.PizzaShop.Dto.Items;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends  JpaRepository<Items, Integer>{

}
