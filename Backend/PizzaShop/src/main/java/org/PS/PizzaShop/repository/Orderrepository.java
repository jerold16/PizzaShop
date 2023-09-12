package org.PS.PizzaShop.repository;

import org.PS.PizzaShop.Dto.DiaOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Orderrepository extends JpaRepository<DiaOrder, Integer> {

}
