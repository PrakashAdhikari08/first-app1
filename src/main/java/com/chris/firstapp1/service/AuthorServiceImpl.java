package com.chris.firstapp1.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.chris.firstapp1.domain.Author;
import com.chris.firstapp1.domain.Books;
import com.chris.firstapp1.repo.AuthorRepository;
import com.chris.firstapp1.repo.BooksRepository;



@Service
public class AuthorServiceImpl implements AuthorService{

	
	@Autowired
	private AuthorRepository authorRepository;
	
	@Autowired
	private BooksRepository booksRepository;
	
	
	//Adding of an author to database
	@Override
	public Integer addAuthor(Author author) {
		Author auth = authorRepository.findByEmail(author.getEmail());
		if(auth != null)
			throw new RuntimeException("Email Alreay exists");
		authorRepository.save(author);
		return author.getId();
	}

	//Returns all authors
	@Override
	public List<Author> getAllAuthor(Integer pageNumber) {
		Pageable pageable = PageRequest.of(pageNumber-1, 3);
		Page<Author> authors = authorRepository.findAllByOrderByIdDesc(pageable);
		List<Author> authorResponse = new ArrayList<>();
		authors.forEach(author ->{
			authorResponse.add(author);
		});		
		return authorResponse; 
	}

	//finding all author
	@Override
	public Author getAuthorById(Integer authorId) {
		Author author = authorRepository.findById(authorId).get();
		return author;
	}

	@Override
	public Long getAuthorCount() {
	Long count = authorRepository.count();
	return count;
	
	}

	@Override
	public void deleteAuthorById(Integer authorId) {
		//due to foreign key constrains delete book associated with author first 
		List<Books> books = booksRepository.findByAuthorId(authorId);
		booksRepository.deleteInBatch(books);
		authorRepository.deleteById(authorId);	
	}

	@Override
	public List<Author> getAuthors() {
		return authorRepository.findAll();
	}
	
	
	
	

}
