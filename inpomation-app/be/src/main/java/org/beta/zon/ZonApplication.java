package org.beta.zon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ZonApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZonApplication.class, args);
	}

}
