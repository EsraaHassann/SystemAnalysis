package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Roadmap;
import com.example.demo.service.RoadmapService;

@RestController
@RequestMapping("/roadmaps")
public class RoadmapController {

    @Autowired
    private RoadmapService roadmapService;

    // @PostMapping("/create")
    // public Roadmap createRoadmap(@RequestBody Roadmap roadmap) {
    //     return roadmapService.createRoadmap(roadmap);
    // }

}