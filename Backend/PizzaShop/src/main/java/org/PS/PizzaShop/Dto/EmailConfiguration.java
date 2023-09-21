package org.PS.PizzaShop.Dto;

import java.util.Map;

import org.springframework.stereotype.Component;

import lombok.Data;
@Data
@Component
public class EmailConfiguration {
      private String subject;
      private String template;
      private Map<String, String> allusers;
      
}
