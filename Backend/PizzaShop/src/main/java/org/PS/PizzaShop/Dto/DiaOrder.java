package org.PS.PizzaShop.Dto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class DiaOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private double total_amnt;
	private double discount_amnt;
	private double amnt_paid;
	private String del_time;
	@ManyToOne
	@JoinColumn
	@JsonIgnore
	private User user;
	@OneToMany(mappedBy = "order",cascade = CascadeType.ALL)
	private List<Items> items;

}
