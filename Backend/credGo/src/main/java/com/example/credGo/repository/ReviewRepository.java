package com.example.credGo.repository;

import com.example.credGo.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByCardId(Long cardId);
}
