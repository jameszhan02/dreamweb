package com.dreamweb.apiserver.Repositories;
import com.dreamweb.apiserver.Entities.Post;
import com.dreamweb.apiserver.Entities.TeamMemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import org.springframework.data.repository.CrudRepository;
@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
}
