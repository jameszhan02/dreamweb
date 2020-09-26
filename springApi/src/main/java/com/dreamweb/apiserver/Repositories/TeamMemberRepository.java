package com.dreamweb.apiserver.Repositories;
import com.dreamweb.apiserver.Entities.TeamMemberEntity;
import org.springframework.data.repository.CrudRepository;

public interface TeamMemberRepository extends CrudRepository<TeamMemberEntity, Long> {
}