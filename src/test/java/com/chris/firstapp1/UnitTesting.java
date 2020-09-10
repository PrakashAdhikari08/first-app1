//package com.chris.firstapp1;
//
//import static org.junit.Assert.assertEquals;
//import static org.junit.Assert.assertTrue;
//
//import org.junit.Before;
//import org.junit.jupiter.api.Test;
//import org.springframework.http.MediaType;
//import org.springframework.mock.web.MockHttpServletResponse;
//import org.springframework.test.web.servlet.MvcResult;
//import  org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//
//import com.chris.firstapp1.domain.Author;
//
//public class UnitTesting  extends FirstApp1ApplicationTests{
//	
//	@Override
//	   @Before
//	   public void setUp() {
//	      super.setUp();
//	   }
//	
//	@Test
//	public void getAuthors() throws Exception {
//	   String uri = "/get-authors";
//	   MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
//	      .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
//	   
//	   int status = mvcResult.getResponse().getStatus();
//	   assertEquals(200, status);
//	}
//
//	
//	   @Test
//	   public void addAuthor() throws Exception {
//	      String uri = "/add-author";
//	      Author author = new Author();
//	      author.setFirstName("Test");
//	      author.setLastName("test-Last");
//	      author.setEmail("test@gmail.com");
//	      author.setAddress("Test Add");
//	      author.setPhone("2323232");
//	      
//	      String inputJson = super.mapToJson(author);
//	      MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri)
//	         .contentType(MediaType.APPLICATION_JSON_VALUE)
//	         .content(inputJson)).andReturn();
//	      
//	      int status = mvcResult.getResponse().getStatus();
//	      assertEquals(200, status);
//	   }
//	   
//	   @Test
//	   public void deleteBook() throws Exception {
//		   int bookId = 0;   //please enter the book Id here  ===== Book Id to be passed and function to be made with parameter as book Id
//	      String uri = "/delete-book/"+bookId;  
//	      MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
//	      int status = mvcResult.getResponse().getStatus();
//	      assertEquals(200, status);
//	   }
//	   
//	   @Test
//	   public void updateBookPrice() throws Exception {
//		   int bookId = 0;
//		   int newPrice = 20;    //please enter the new Price here  ===== Book Id, New Price to be passed and function to be made with parameter as book Id
//	      String uri = "/update-price/book/"+bookId+"?newPrice="+newPrice;
//	      MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.put(uri)
//	         ).andReturn();
//	      
//	      int status = mvcResult.getResponse().getStatus();
//	      assertEquals(200, status);
//	   }
//}
