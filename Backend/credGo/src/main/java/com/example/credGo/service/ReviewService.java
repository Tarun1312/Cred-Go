package com.example.credGo.service;

import com.example.credGo.model.Review;
import com.example.credGo.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public Review addReview(Review review) {
        review.setTimestamp(java.time.LocalDateTime.now());
        return reviewRepository.save(review);
    }

    public List<Review> getReviewsByCardId(Long cardId) {
        return reviewRepository.findByCardId(cardId);
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }
}
