package com.example.credGo.controller;

import com.example.credGo.model.Con;
import com.example.credGo.service.ConService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cons")
public class ConController {

    private final ConService conService;

    public ConController(ConService conService) {
        this.conService = conService;
    }

    @GetMapping("/card/{cardId}")
    public List<Con> getConsByCardId(@PathVariable Long cardId) {
        return conService.getConsByCardId(cardId);
    }

    @PostMapping
    public Con addCon(@RequestBody Con con) {
        return conService.addCon(con);
    }
}
