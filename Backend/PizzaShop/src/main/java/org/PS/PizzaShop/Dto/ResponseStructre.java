package org.PS.PizzaShop.Dto;

import lombok.Data;
import lombok.Getter;

@Data
public class ResponseStructre<T> {
        private T data;
        private String message;
        private int statuscode;
}
