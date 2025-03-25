package com.example.credGo.repository;

import com.example.credGo.model.Perk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PerkRepository extends JpaRepository<Perk, Long> {
    List<Perk> findByCardId(Long cardId);
}