package com.example.credGo.controller;

import com.example.credGo.model.Card;
import com.example.credGo.service.CardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
@CrossOrigin(origins = "http://localhost:3000")
public class CardController {

    private final CardService cardService;

    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    // ✅ Get all cards
    @GetMapping
    public List<Card> getAllCards() {
        return cardService.getAllCards();
    }

    // ✅ Get cards by category
    @GetMapping("/category/{category}")
    public List<Card> getCardsByCategory(@PathVariable("category") String category) {
        return cardService.getCardsByCategory(category);
    }

    // ✅ Search card by name (case-insensitive)
    @GetMapping("/search")
    public ResponseEntity<Card> searchCardByName(@RequestParam("name") String name) {
        List<Card> cards = cardService.searchCardByName(name);
        if (!cards.isEmpty()) {
            return ResponseEntity.ok(cards.get(0));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/featured")
    public List<Card> getFeaturedCards() {
        return cardService.getFeaturedCards(); // returns cards with featured == true
    }

    // ✅ Add a new card
    @PostMapping
    public Card addCard(@RequestBody Card card) {
        return cardService.addCard(card);
    }
}
