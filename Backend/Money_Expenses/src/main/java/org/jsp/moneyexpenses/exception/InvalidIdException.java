package org.jsp.moneyexpenses.exception;

public class InvalidIdException extends RuntimeException{

	
	private static final long serialVersionUID = 1L;

	@Override
	public String getMessage() {
		return "Invalid Id";
	}
}
