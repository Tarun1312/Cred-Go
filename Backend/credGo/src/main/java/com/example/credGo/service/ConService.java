package com.example.credGo.service;

import com.example.credGo.model.Con;
import com.example.credGo.repository.ConRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ConService {

    private final ConRepository conRepository;

    public ConService(ConRepository conRepository) {
        this.conRepository = conRepository;
    }

    public List<Con> getConsByCardId(Long cardId) {
        return conRepository.findByCardId(cardId);
    }

    public Con addCon(Con con) {
        return conRepository.save(con);
    }
}
