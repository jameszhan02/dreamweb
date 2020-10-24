package com.dreamweb.apiserver.Services;


import com.dreamweb.apiserver.Entities.TeamMemberEntity;
import org.springframework.stereotype.Component;

@Component
public interface TeamMemberService {
    Iterable<TeamMemberEntity> findAll();
}
