package com.example.credGo.controller;

import com.example.credGo.model.Pro;
import com.example.credGo.service.ProService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pros")
public class ProController {

    private final ProService proService;

    public ProController(ProService proService) {
        this.proService = proService;
    }

    @GetMapping("/card/{cardId}")
    public List<Pro> getProsByCardId(@PathVariable Long cardId) {
        return proService.getProsByCardId(cardId);
    }

    @PostMapping
    public Pro addPro(@RequestBody Pro pro) {
        return proService.addPro(pro);
    }
}
