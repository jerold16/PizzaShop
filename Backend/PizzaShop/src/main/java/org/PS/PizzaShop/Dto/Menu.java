package org.PS.PizzaShop.Dto;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Menu {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false)
	private String name;
	@Column(nullable=false)
	private double price;
	@Column(nullable=false)
	private String toppings;
	@Column(nullable=false)
	private String type;
	@Column(nullable=false)
	private String imageurl;
}
