package org.beta.zon.user.repository;

import org.beta.zon.user.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByUsernoBetweenOrderByUsernoDesc(Long from, Long to); // 사용법 test > testQueryMethods

    Page<User> findByUsernoBetween(Long from, Long to, Pageable pageable); // 사용법 test > testQueryMethodWithPageable

    void deleteUserByUsernoLessThan(Long num);

    @Query(value = "select * from user u where u.username = :username and u.password = :password")
    User signin(@Param("username") String username, @Param("password") String password);
    // Update Review a set a.title = :title, a.content = :content where a.reviewId = :reviewId
    // @Query(value = "select * from artists where username=:username and password=:password", nativeQuery = true)
}
