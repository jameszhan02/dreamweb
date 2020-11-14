package com.dreamweb.apiserver.Controllers;


import com.dreamweb.apiserver.Entities.TeamMemberEntity;
import com.dreamweb.apiserver.Repositories.TeamMemberRepository;
import com.dreamweb.apiserver.Services.TeamMemberService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@CrossOrigin
@RequestMapping(path="/teamMember")
@Api(value = "testController|一个用来测试swagger注解的控制器")
public class TeamMemberController  {
//
//    @Autowired
//    TeamMemberRepository teamMemberRepository;
    @Autowired
    private TeamMemberService teamMemberService;

    @GetMapping(path = "/listAll")
    @ResponseBody
    public Iterable<TeamMemberEntity> findAll(){
        return teamMemberService.findAll();
    }


}
