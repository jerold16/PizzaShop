package org.PS.PizzaShop.Service;

import org.PS.PizzaShop.Dto.EmailConfiguration;
import org.PS.PizzaShop.Dto.ResponseStructre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import jakarta.mail.internet.MimeMessage;

public class UserEmailConfigService {
    @Autowired
    private JavaMailSender mailSender;
    
    @Autowired
    private EmailConfiguration configuration;
    
	public String sendWelcomeMail(EmailConfiguration configuration) {
		MimeMessage message=mailSender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(message);
		try {
			helper.setTo(configuration.getAllusers().get(helper));
			helper.setSubject(configuration.getSubject());
			helper.setText(configuration.getTemplate());
			mailSender.send(message);
			return "mail send succesfully";
		}
		catch(Exception e) {
			e.printStackTrace();
			return "unable to send email";
		}
	}
}
