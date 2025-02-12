package com.example.credGo.controller;

import com.example.credGo.model.Card;
import com.example.credGo.service.CardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React
public class CardController {

    private final CardService cardService;

    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    // Get all cards
    @GetMapping
    public List<Card> getAllCards() {
        return cardService.getAllCards();
    }

    // Get cards by category
    @GetMapping("/category/{category}")
    public List<Card> getCardsByCategory(@PathVariable String category) {
        return cardService.getCardsByCategory(category);
    }

    // Add a new card
    @PostMapping
    public Card addCard(@RequestBody Card card) {
        return cardService.addCard(card);
    }
}
