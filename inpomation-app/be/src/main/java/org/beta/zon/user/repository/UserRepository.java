package org.beta.zon.user.repository;

import org.beta.zon.user.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByUsernoBetweenOrderByUsernoDesc(Long from, Long to); // 사용법 test > testQueryMethods

    Page<User> findByUsernoBetween(Long from, Long to, Pageable pageable); // 사용법 test > testQueryMethodWithPageable

    void deleteUserByUsernoLessThan(Long num);
}
