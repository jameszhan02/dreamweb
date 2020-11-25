package com.dreamweb.apiserver.Services;

import com.dreamweb.apiserver.Entities.Post;
import com.dreamweb.apiserver.Entities.TeamMemberEntity;
import org.springframework.stereotype.Component;


@Component
public interface PostService {
    Iterable<Post> findAll();
}
