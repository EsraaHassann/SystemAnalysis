package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.exception.ResourceNotFound;
import com.example.demo.models.Roadmap;
import com.example.demo.repository.RoadmapRepository;

public class RoadmapServiceImpl implements RoadmapService{
    
    private final RoadmapRepository roadmapRepository;

    @Autowired
    public RoadmapServiceImpl(RoadmapRepository roadmapRepository) {
        this.roadmapRepository = roadmapRepository;
    }

    @Override
    public Roadmap createPost(Roadmap roadmap) {
        return roadmapRepository.save(roadmap);
    }

    @Override
    public Roadmap getPost(Long id) {
        Optional<Roadmap> optionalRoadmap = roadmapRepository.findById(id);
        return optionalRoadmap.orElse(null);
    }

    @Override
    public Roadmap updatePost(Roadmap roadmap, Long id) {
        Optional<Roadmap> optionalRoadmap = roadmapRepository.findById(id);
        if (optionalRoadmap.isPresent()) {
            Roadmap existingRoadmap = optionalRoadmap.get();
            existingRoadmap.setTitle(roadmap.getTitle());
            existingRoadmap.setDescription(roadmap.getDescription());
            // You can update other fields as needed
            return roadmapRepository.save(existingRoadmap);
        } else {
            return null; // Handle the case where the roadmap with the specified ID doesn't exist
        }
    }

    @Override
    public void deletePost(Long id) {
        roadmapRepository.deleteById(id);
    }

    @Override
    public List<Roadmap> getAllPost() {
        return roadmapRepository.findAll();
    }

}
