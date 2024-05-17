package com.example.demo.service;
import com.example.demo.models.Roadmap;
import java.util.List;

public interface RoadmapService {

    Roadmap createRoadmap(Roadmap roadmap);

    Roadmap getRoadmap(Long id);

    Roadmap updateRoadmap(Roadmap roadmap, Long id);

    void deleteRoadmap(Long id);

    List<Roadmap> getAllRoadmaps();

    List<Roadmap> getApprovedRoadmaps();

    List<Roadmap> getRoadmapsByUserId(Long userId);

    Roadmap approveRoadmap(Long id);
}
