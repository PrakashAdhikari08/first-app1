package com.chris.firstapp1.controller;

import java.util.List;

import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.chris.firstapp1.domain.Author;
import com.chris.firstapp1.domain.Books;
import com.chris.firstapp1.service.AuthorService;
import com.chris.firstapp1.service.BookService;

@RestController
@CrossOrigin
//(origins = "http://localhost:3000")
public class AuthorBookController {
	
	
	private AuthorService authorService;
	
	private BookService bookService;
	
	@Autowired
	public void setAuthorService(AuthorService authorService) {
		this.authorService = authorService;
	}
	
	@Autowired
	public void setBookService(BookService bookService) {
		this.bookService = bookService;
	}
	
	
	@GetMapping("/hello")
	private String helloWorld() {
		return "Hello There";
	}
	
	@PostMapping("/add-author")
	public ResponseEntity<String> addAuthor(@RequestBody Author author){
		authorService.addAuthor(author);
		return new ResponseEntity<>("Author Created", HttpStatus.CREATED);
	}
	
	@GetMapping("/get-count-author")
	public ResponseEntity<Long> getAuthorCount(){
		Long count = authorService.getAuthorCount();
		return new ResponseEntity<>(count,HttpStatus.OK);
	}
	
	@GetMapping("/get-authors")
	public List<Author> getAuthors(){
		return authorService.getAuthors();
		
	}
	
	@GetMapping("/get-all-author/{pageNumber}")
	public List<Author> getAllAuthors(@PathVariable Integer pageNumber){
		return authorService.getAllAuthor(pageNumber);	
	}

	@GetMapping("/get-author/{authorId}")
	public Author getAuthorById(@PathVariable Integer authorId) {
		return authorService.getAuthorById(authorId);
	}
	
	@DeleteMapping("/delete-author/{authorId}")
	public ResponseEntity<String> deleteAuthorById(@PathVariable Integer authorId){
		authorService.deleteAuthorById(authorId);
		return new ResponseEntity<>("Author Deleted", HttpStatus.OK);
	}
	
	//BOOKS CONTROLLER
	
	@PostMapping("/add-book/author/{authorId}")
	public ResponseEntity<String> addBookByAuthor(@PathVariable Integer authorId, @RequestBody Books book){
		bookService.addBookByAuthor(authorId, book);
		return new ResponseEntity<>("Book Added", HttpStatus.CREATED);
		
	}
	
	@GetMapping("get-all-book/author/{authorId}/{pageNumber}")
	public List<Books> getAllBooksAuthor(@PathVariable Integer authorId, @PathVariable Integer pageNumber){
		return bookService.getAllBooksAuthor(authorId,pageNumber);
	}
	
	@DeleteMapping("delete-book/{bookId}")
	public ResponseEntity<String> deleteBook(@PathVariable Integer bookId){
		bookService.deleteBook(bookId);
		return new ResponseEntity<>("Book Deleted", HttpStatus.OK);
	}
	
	@PutMapping("/update-price/book/{bookId}")
	public ResponseEntity<String> updatePrice(@RequestParam Double newPrice, @PathVariable Integer bookId){
		bookService.updatePrice(newPrice, bookId);
		return new ResponseEntity<>("Price Updated", HttpStatus.OK);
		
	}
}
