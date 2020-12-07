package com.dreamweb.apiserver.Controllers;


import com.dreamweb.apiserver.Entities.Post;
import com.dreamweb.apiserver.Entities.TeamMemberEntity;
import com.dreamweb.apiserver.Entities.User;
import com.dreamweb.apiserver.Repositories.TeamMemberRepository;
import com.dreamweb.apiserver.Repositories.UserRepository;
import com.dreamweb.apiserver.Services.TeamMemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@Controller
@CrossOrigin
@RequestMapping(path="/user")
@Api(tags  = "user about APIs")
public class UserController  {
    @Autowired
    private UserRepository userRepository;


    @PostMapping(path = "/signup")
    @ApiOperation("add a new user")
    @ResponseBody
    public User Save(@RequestBody User user){
//        System.out.println(user);
       User res =  userRepository.save(user);
       return res;
    }

    @PostMapping(path = "/signin")
    @ResponseBody
    public User SignIn(@RequestBody User user){
        String email = user.getEmail();
        String password = user.getPassword();
        User returnUser = userRepository.findTopByEmailAndPassword(email,password);
        return returnUser;
    }

    @GetMapping(path = "/{id}")
    @ResponseBody
    public Optional<User> findById(@PathVariable long id){
        return userRepository.findById(id);
    }

    @GetMapping(path = "/getall")
    @ResponseBody
    public Iterable<User> findAll(){
        return userRepository.findAll();
    }
}
