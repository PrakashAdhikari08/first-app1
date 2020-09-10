package com.chris.firstapp1.service;

import java.util.List;


import com.chris.firstapp1.domain.Author;


public interface AuthorService {
	
	Integer addAuthor(Author author);

	List<Author> getAllAuthor(Integer pageNumber);

	Author getAuthorById(Integer authorId);

	Long getAuthorCount();

	void deleteAuthorById(Integer authorId);

	List<Author> getAuthors();

	

}
