package com.dreamweb.apiserver.Repositories;
        import com.dreamweb.apiserver.Entities.TeamMemberEntity;
        import com.dreamweb.apiserver.Entities.User;
        import org.springframework.data.jpa.repository.JpaRepository;
        import org.springframework.data.repository.CrudRepository;
        import org.springframework.stereotype.Repository;

//import org.springframework.data.repository.CrudRepository;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
