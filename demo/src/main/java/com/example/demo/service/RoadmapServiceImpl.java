package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.models.Roadmap;
import com.example.demo.repository.RoadmapRepository;


@Service
public class RoadmapServiceImpl implements RoadmapService {

    private RoadmapRepository roadmapRepository;

    @Override
    public Roadmap create(Roadmap roadmap) {
        return roadmapRepository.save(roadmap);
    }

    @Override
    public Roadmap get(Long id) {
        Optional<Roadmap> optionalRoadmap = roadmapRepository.findById(id);
        return optionalRoadmap.orElse(null);
    }

    @Override
    public Roadmap update(Roadmap roadmap, Long id) {
        Optional<Roadmap> optionalRoadmap = roadmapRepository.findById(id);
        if (optionalRoadmap.isPresent()) {
            Roadmap existingRoadmap = optionalRoadmap.get();
            existingRoadmap.setTitle(roadmap.getTitle());
            existingRoadmap.setDescription(roadmap.getDescription());
            return roadmapRepository.save(existingRoadmap);
        } else {
            return null;
        }
    }

    @Override
    public void delete(Long id) {
        roadmapRepository.deleteById(id);
    }

    @Override
    public List<Roadmap> getAll() {
        return roadmapRepository.findAll();
    }

}
