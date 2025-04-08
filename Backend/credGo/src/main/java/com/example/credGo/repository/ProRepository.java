package com.example.credGo.repository;

import com.example.credGo.model.Pro;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProRepository extends JpaRepository<Pro, Long> {
    List<Pro> findByCardId(Long cardId);
}
