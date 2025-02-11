package com.example.credGo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // JPA Entity (used with MySQL)
@Table(name = "credit_cards") // MySQL table name
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // MySQL Auto-increment
    private Long id; // Changed from String to Long for MySQL compatibility

    private String name;          // Name of the credit card
    private String category;      // Category (e.g., Travel, Cashback)
    private double rating;        // Rating of the card
    private String annualFee;     // Annual fee of the card
    private String yearlyCost;    // Yearly cost details
    private String rewards;       // Rewards offered by the card
    private String welcomeBonus;  // Welcome bonus details
    private String imageUrl;      // Image URL for the card
    private boolean featured;     // If the card is featured
}
