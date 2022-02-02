package org.beta.zon.productInfomation.repository;

import org.beta.zon.productInfomation.domain.ProductInfomation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductInfomationRepository extends JpaRepository<ProductInfomation, Long> {
}
