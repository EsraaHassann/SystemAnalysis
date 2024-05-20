package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Roadmap;
import com.example.demo.models.Role;
import com.example.demo.models.Status;
import com.example.demo.repository.RoadmapRepository;

@Service
public class RoadmapServiceImpl implements RoadmapService {

    @Autowired
    private RoadmapRepository roadmapRepository;

    @Override
    public Roadmap createRoadmap(Roadmap roadmap) {
        return roadmapRepository.save(roadmap);
    }

    @Override
    public Roadmap getRoadmap(Long id) {
        Optional<Roadmap> optionalRoadmap = roadmapRepository.findById(id);
        return optionalRoadmap.orElse(null);
    }

    @Override
    public Roadmap updateRoadmap(Roadmap roadmap, Long id) {
        Optional<Roadmap> optionalRoadmap = roadmapRepository.findById(id);
        if (optionalRoadmap.isPresent()) {
            Roadmap existingRoadmap = optionalRoadmap.get();
            existingRoadmap.setTitle(roadmap.getTitle());
            existingRoadmap.setDescription(roadmap.getDescription());
            existingRoadmap.setStatus(roadmap.getStatus());
            existingRoadmap.setSteps(roadmap.getSteps());
            return roadmapRepository.save(existingRoadmap);
        } else {
            return null;
        }
    }

    @Override
    public void deleteRoadmap(Long id) {
        roadmapRepository.deleteById(id);
    }

    @Override
    public List<Roadmap> getAllRoadmaps() {
        return roadmapRepository.findAll();
    }

    
    @Override
    public List<Roadmap> getRoadmapsByUserId(Long userId) {
        return roadmapRepository.findByUserId(userId);
    }

    @Override
    public List<Roadmap> getApprovedRoadmaps() {
        return roadmapRepository.findByStatus(Status.APPROVED);
    }
    @Override
    public List<Roadmap> getRoadmapsByUserRoleUser() {
        return roadmapRepository.findAllByUserRoleUser();
    }
    @Override
    public Roadmap updateRoadmapStatus(Long id, Status status) {
        Optional<Roadmap> optionalRoadmap = roadmapRepository.findById(id);
        if (optionalRoadmap.isPresent()) {
            Roadmap roadmap = optionalRoadmap.get();
            roadmap.setStatus(status);
            return roadmapRepository.save(roadmap);
        } else {
            return null;
        }
    }
}


