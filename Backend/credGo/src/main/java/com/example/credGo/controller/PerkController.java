package com.example.credGo.controller;

import com.example.credGo.model.Perk;
import com.example.credGo.service.PerkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/perks")
public class PerkController {

    @Autowired
    private PerkService perkService;

    @GetMapping("/card/{cardId}")
    public List<Perk> getPerksByCardId(@PathVariable Long cardId) {
        return perkService.getPerksByCardId(cardId);
    }
}
