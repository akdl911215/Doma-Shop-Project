package org.beta.zon.user.repository;

import org.beta.zon.user.domain.User;
import org.beta.zon.user.domain.dto.UserDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByUsernoBetweenOrderByUsernoDesc(Long from, Long to); // 사용법 test > testQueryMethods

    Page<User> findByUsernoBetween(Long from, Long to, Pageable pageable); // 사용법 test > testQueryMethodWithPageable

    void deleteUserByUsernoLessThan(Long num);

    Optional<User> findByUsername(String username);

    //@Query(value = "SELECT us FROM user us WHERE us.username=:username and us.password")
    @Query(value = "select * from user where username=:username and password=:password", nativeQuery = true)
    User signin(@Param("username") String username, @Param("password") String password);
}
