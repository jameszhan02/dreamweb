package com.dreamweb.apiserver.Controllers;


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

import java.util.List;


@Controller
@CrossOrigin
@RequestMapping(path="/user")
@Api(tags  = "用户相关接口")
public class UserController  {
    @Autowired
    private UserRepository userRepository;


    @PostMapping(path = "/signup")
    @ApiOperation("添加注册用户的接口")
    @ResponseBody
    public User Save(@RequestBody User user){
//        System.out.println(user);
       User res =  userRepository.save(user);
       return res;
    }

    @PostMapping(path = "/signin")
    @ResponseBody
    public Boolean SignIn(@RequestBody User user){
        Boolean res = false;
        String email = user.getEmail();
        String password = user.getPassword();
        User returnUser = userRepository.findTopByEmailAndPassword(email,password);
        if(returnUser != null){
            res = true;
        }
        System.out.println(res);
        return res;
    }


}
