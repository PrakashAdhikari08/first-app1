package com.chris.firstapp1.repo;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.chris.firstapp1.domain.Books;



public interface BooksRepository extends JpaRepository<Books, Integer> {

	List<Books> findByAuthorIdOrderByIdDesc(Integer authorId, Pageable pageable);

	List<Books> findByAuthorId(Integer authorId);

	

}
