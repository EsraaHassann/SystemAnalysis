package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Roadmap;
import com.example.demo.models.User;
import com.example.demo.repository.RoadmapRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.RoadmapService;

@CrossOrigin(origins = "http://localhost:3030")
@RestController
@RequestMapping("api/admin")
public class RoadmapController {

    @Autowired
    private RoadmapService roadmapService;
    @Autowired
    private RoadmapRepository roadmapRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/create/roadmap/{userId}")
    public ResponseEntity<?> createRoadmap(@RequestBody Roadmap roadmap, @PathVariable("userId") Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found with ID: " + userId);
        }
        roadmap.setUser(user);
        roadmap.setApproved(true);
        Roadmap createdRoadmap = roadmapRepository.save(roadmap);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRoadmap);
    }

    @GetMapping("/roadmaps")
    public ResponseEntity<List<Roadmap>> getAllApprovedRoadmaps() {
        List<Roadmap> roadmaps = roadmapRepository.findByApprovedTrue();
        if (roadmaps.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(roadmaps);
    }
    // @PostMapping("/create") @RequestParam("useId") Long useId
    // public Roadmap createRoadmap(@RequestBody Roadmap roadmap) {
    // return roadmapService.createRoadmap(roadmap);
    // }

}