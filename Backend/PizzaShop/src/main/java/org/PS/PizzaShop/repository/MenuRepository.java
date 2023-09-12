package org.PS.PizzaShop.repository;

import org.PS.PizzaShop.Dto.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface MenuRepository extends JpaRepository<Menu, Integer>{

}
