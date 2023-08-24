package org.jsp.moneyexpenses.exception;

import org.jsp.moneyexpenses.dto.ResponseStructure;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class MoneyExceptionHandler {

	@ExceptionHandler(InvalidIdException.class)
	
	public ResponseEntity<ResponseStructure<String>> handleIIE(InvalidIdException e)
	{
		ResponseStructure<String> s=new ResponseStructure<>();
		s.setData("Invalid Id");
		s.setMessage(e.getMessage());
		s.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(s,HttpStatus.NOT_FOUND);
	}
	
@ExceptionHandler(InvalidPhoneOrPasswordException.class)
	
	public ResponseEntity<ResponseStructure<String>> handleIPPE(InvalidPhoneOrPasswordException e)
	{
		ResponseStructure<String> s=new ResponseStructure<>();
		s.setData("Invalid Phone or Password ");
		s.setMessage(e.getMessage());
		s.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(s,HttpStatus.NOT_FOUND);
	}
	
@ExceptionHandler(SomeThingException.class)

public ResponseEntity<ResponseStructure<String>> handleSTE(SomeThingException e)
{
	ResponseStructure<String> s=new ResponseStructure<>();
	s.setData("Something is Wrong");
	s.setMessage(e.getMessage());
	s.setStatusCode(HttpStatus.NOT_FOUND.value());
	return new ResponseEntity<ResponseStructure<String>>(s,HttpStatus.NOT_FOUND);
}
}
