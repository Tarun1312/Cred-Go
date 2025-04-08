package com.example.credGo.repository;

import com.example.credGo.model.Con;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ConRepository extends JpaRepository<Con, Long> {
    List<Con> findByCardId(Long cardId);
}
