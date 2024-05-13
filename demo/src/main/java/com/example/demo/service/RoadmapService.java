package com.example.demo.service;
import com.example.demo.models.Roadmap;
import java.util.List;

public interface RoadmapService {

    public Roadmap createPost(Roadmap roadmap);

    public Roadmap getPost(Long id);

    public Roadmap updatePost(Roadmap coroadmapurse, Long id);

    public void deletePost(Long id);

    public List<Roadmap> getAllPost();
}
