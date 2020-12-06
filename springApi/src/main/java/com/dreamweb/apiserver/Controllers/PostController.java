package com.dreamweb.apiserver.Controllers;
import com.dreamweb.apiserver.Entities.Post;
import com.dreamweb.apiserver.Repositories.PostRepository;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@CrossOrigin
@RequestMapping(path="/post")
@Api(value = "post Controller")
public class PostController {
    @Autowired
    private PostRepository postRepository;

    @GetMapping(path = "/getall")
    @ResponseBody
    public Iterable<Post> findAll(){
        return postRepository.findAll();
    }

    @PostMapping(path = "/savepost")
    @ResponseBody
    public Post Save(@RequestBody Post post){
        Post res =  postRepository.save(post);
        return res;
    }

    @GetMapping(path = "/{id}")
    @ResponseBody
    public Optional<Post> findById(@PathVariable long id){
        return postRepository.findById(id);
    }

}
