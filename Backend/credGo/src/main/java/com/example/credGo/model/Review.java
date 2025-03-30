package com.example.credGo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "card_reviews")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long cardId;          // FK: links to Card table
    private String name;          // Reviewer name (optional)
    private double rating;        // 1.0 to 5.0
    private String comment;       // Review content
    private LocalDateTime timestamp; // Created time
}
