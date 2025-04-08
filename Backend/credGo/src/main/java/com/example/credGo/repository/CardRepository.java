package com.example.credGo.repository;

import com.example.credGo.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {

    // ✅ Find all cards by category
    List<Card> findByCategory(String category);

    // ✅ Search cards by name (case-insensitive)
    List<Card> findByNameContainingIgnoreCase(String name);

    List<Card> findByFeaturedTrue();

}
