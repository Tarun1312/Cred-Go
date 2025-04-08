package com.example.credGo.service;

import com.example.credGo.model.Pro;
import com.example.credGo.repository.ProRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProService {

    private final ProRepository proRepository;

    public ProService(ProRepository proRepository) {
        this.proRepository = proRepository;
    }

    public List<Pro> getProsByCardId(Long cardId) {
        return proRepository.findByCardId(cardId);
    }

    public Pro addPro(Pro pro) {
        return proRepository.save(pro);
    }
}
