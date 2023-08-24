package org.jsp.moneyexpenses.exception;

public class SomeThingException extends RuntimeException{


	private static final long serialVersionUID = 1L;
	
	@Override
	public String getMessage() {
		// TODO Auto-generated method stub
		return "Something is Wrong";
	}

}
