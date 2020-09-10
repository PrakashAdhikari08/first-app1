package com.chris.firstapp1.service;

import java.util.List;

import com.chris.firstapp1.domain.Books;

public interface BookService {

	
	Integer addBookByAuthor(Integer authorId, Books book);

	List<Books> getAllBooksAuthor(Integer authorId, Integer pageNumber);

	void deleteBook(Integer bookId);

	void updatePrice(Double newPrice, Integer bookId);


}
