package com.example.credGo.service;

import com.example.credGo.model.Perk;
import com.example.credGo.repository.PerkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PerkService {

    @Autowired
    private PerkRepository perkRepository;

    public List<Perk> getPerksByCardId(Long cardId) {
        return perkRepository.findByCardId(cardId); // ✅ Match repository method
    }
}
