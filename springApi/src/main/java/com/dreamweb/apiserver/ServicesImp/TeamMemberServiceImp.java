package com.dreamweb.apiserver.ServicesImp;

import com.dreamweb.apiserver.Entities.TeamMemberEntity;
import com.dreamweb.apiserver.Repositories.TeamMemberRepository;
import com.dreamweb.apiserver.Services.TeamMemberService;
import org.springframework.beans.factory.annotation.Autowired;

public class TeamMemberServiceImp implements TeamMemberService {
    @Autowired
    TeamMemberRepository teamMemberRepository;


    public Iterable<TeamMemberEntity> findAll(){
        return teamMemberRepository.findAll();
    }
}
