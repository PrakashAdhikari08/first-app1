package com.chris.firstapp1.service;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.chris.firstapp1.domain.Author;
import com.chris.firstapp1.domain.Books;
import com.chris.firstapp1.repo.BooksRepository;

@Service
public class BookServiceImpl implements BookService {
	
	@Autowired
	private BooksRepository bookRepository;

	@Override
	public Integer addBookByAuthor(Integer authorId, Books book) {
		book.setAuthor(new Author(authorId));
		bookRepository.save(book);
		return book.getId();
	}

	@Override
	public List<Books> getAllBooksAuthor(Integer authorId, Integer pageNumber) {
		Pageable pageable = PageRequest.of(pageNumber-1, 3);
		List<Books> books = bookRepository.findByAuthorIdOrderByIdDesc(authorId,pageable);
		return books;
	}

	@Override
	public void deleteBook(Integer bookId) {
	bookRepository.deleteById(bookId);	
	}

	@Override
	@Transactional
	public void updatePrice(Double newPrice, Integer bookId) {
		Books book = new Books();
		book = bookRepository.findById(bookId).get();
		book.setPrice(newPrice);
	}

	

	

}
