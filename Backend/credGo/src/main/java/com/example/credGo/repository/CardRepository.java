package com.example.credGo.repository;

import com.example.credGo.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> { // Changed to JpaRepository
    List<Card> findByCategory(String category); // Custom query to filter by category
}
