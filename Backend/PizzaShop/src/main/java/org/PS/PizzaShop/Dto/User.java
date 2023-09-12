package org.PS.PizzaShop.Dto;

import java.util.List;


import jakarta.persistence.*;
import jakarta.persistence.criteria.Order;
import lombok.Data;

@Entity
@Data
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false)
	private String name;
	@Column(nullable = false,unique = true)
	private String email;
	@Column(nullable = false)
	private String password;
	@Column(nullable = false,unique = true)
	private long phone;
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
	private List<DiaOrder> orders;
}
