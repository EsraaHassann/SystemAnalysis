package com.example.demo.repository;

import com.example.demo.models.Roadmap;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RoadmapRepository extends JpaRepository<Roadmap, Long> {
    List<Roadmap> findAllById(Long id);
    List<Roadmap> findByTitleContainingIgnoreCase(String title);
    List<Roadmap> findByApproved(boolean approved);
    List<Roadmap> findByUserId(Long userId);
}