package com.dreamweb.apiserver.Controllers;


import com.dreamweb.apiserver.Entities.TeamMemberEntity;
import com.dreamweb.apiserver.Repositories.TeamMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@CrossOrigin
@RequestMapping(path="/teamMember")
public class TeamMemberController {
    @Autowired
    private TeamMemberRepository teamMemberRepository;

    @GetMapping(path = "/listAll")
    @ResponseBody
    public Iterable<TeamMemberEntity> findAll(){
        return teamMemberRepository.findAll();
    }


}
