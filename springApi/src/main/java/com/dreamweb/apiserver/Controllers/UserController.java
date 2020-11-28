package com.dreamweb.apiserver.Controllers;


import com.dreamweb.apiserver.Entities.TeamMemberEntity;
import com.dreamweb.apiserver.Entities.User;
import com.dreamweb.apiserver.Repositories.TeamMemberRepository;
import com.dreamweb.apiserver.Repositories.UserRepository;
import com.dreamweb.apiserver.Services.TeamMemberService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@CrossOrigin
@RequestMapping(path="/user")
@Api(value = "user Controller")
public class UserController  {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/signup")
    @ResponseBody
    public User Save(@RequestBody User user){
//        System.out.println(user);
       User res =  userRepository.save(user);
       return res;
    }

    @PostMapping(path = "/signin")
    @ResponseBody
    public User SignIn(@RequestBody User user){
        User res =  new User();
        return res;
    }


}
