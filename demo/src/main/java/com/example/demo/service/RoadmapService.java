package com.example.demo.service;
import com.example.demo.models.Roadmap;
import java.util.List;

public interface RoadmapService {

    public Roadmap create(Roadmap roadmap);

    public Roadmap get(Long id);

    public Roadmap update(Roadmap roadmap, Long id);

    public void delete(Long id);

    public List<Roadmap> getAll();
}
