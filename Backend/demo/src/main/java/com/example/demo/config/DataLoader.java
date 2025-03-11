package com.example.demo.config;

import com.example.demo.model.Card;
import com.example.demo.repository.CardRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {
    @Bean
    CommandLineRunner loadData(CardRepository repository) {
        return args -> {
            repository.save(new Card(null, "American Express Cobalt® Card", 4.5, "$156", "$643/yr",
                    "Earn rewards for dining, groceries, and more.",
                    "1pt – 5pts / dollar spent", "15,000 points ($150 value)", "https://www.amex.com"));
            repository.save(new Card(null, "Visa Infinite Card", 4.2, "$120", "$500/yr",
                    "Exclusive travel benefits and dining rewards.",
                    "2pts / dollar spent", "10,000 points ($100 value)", "https://www.visa.com"));
        };
    }
}
