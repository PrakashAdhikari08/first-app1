package com.chris.firstapp1.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import com.chris.firstapp1.domain.Author;


public interface AuthorRepository extends JpaRepository<Author, Integer> {

	Author findByEmail(String email);

	Page<Author> findAllByOrderByIdDesc(Pageable pageable);

}
