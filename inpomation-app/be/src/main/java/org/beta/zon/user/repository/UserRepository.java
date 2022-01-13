package org.beta.zon.user.repository;

import org.beta.zon.user.domain.User;
import org.beta.zon.user.domain.dto.UserDto;
import org.beta.zon.user.domain.role.Role;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long>, QuerydslPredicateExecutor<User>   {

    List<User> findByUsernoBetweenOrderByUsernoDesc(Long from, Long to); // 사용법 test > testQueryMethods

    Page<User> findByUsernoBetween(Long from, Long to, Pageable pageable); // 사용법 test > testQueryMethodWithPageable

    void deleteUserByUsernoLessThan(Long num);



    Optional<User> findByUsername(String username);
    Role findByRoles(Role roles);

//    @Query(value = "select * from user where username=:username and password=:password", nativeQuery = true)
    //@EntityGraph(attributePaths = {"roles"}, type = EntityGraph.EntityGraphType.LOAD)
//    @Query(value = "SELECT users.username, users.password, user_roles.roles from" +
//            " users JOIN user_roles using user_no", nativeQuery = true)

//    @Query("SELECT u, r FROM User u LEFT JOIN u.user_no r where u.username = :username and u.password = :password")
//    @EntityGraph(attributePaths = {"roles"}, type = EntityGraph.EntityGraphType.LOAD)
    @Query(value = "SELECT u FROM User u WHERE u.username = :username AND u.password = :password")
    User signin(@Param("username") String username, @Param("password") String password);
//    @Query(value = "SELECT * FROM User u OUTER JOIN Role r ON u.user_no = r.user_no")

    // @EntityGraph = LAZY 패치타입으로 relation이 달려있는 entity를 n+1 문제 없이 한번에 가져오고 싶으때 사용
    // 특정 시나리오에서는 한번에 패치하는게 필요하기때문에 사용.
    // 해당 어노테이션만 달아주면 손쉽게 join해서 한번에 패치해 올 수 있다.
//    @EntityGraph(attributePaths = {"roleSet"}, type = EntityGraph.EntityGraphType.LOAD)
//    @Query("select u from User u where u.fromSocial = :social and u.username = :username")
//    Optional<User> findByUsername(String username, boolean social);

}
