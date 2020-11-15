package com.dreamweb.apiserver.Services;
import com.dreamweb.apiserver.Entities.TeamMemberEntity;
import com.dreamweb.apiserver.Entities.User;
import org.springframework.stereotype.Component;

@Component
public interface UserService {
    Iterable<User> findAll();
}
