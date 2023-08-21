package org.jsp.moneyexpenses.exception;

public class InvalidPhoneOrPasswordException  extends RuntimeException{

	
	private static final long serialVersionUID = 1L;

	@Override
	public String getMessage() {
		// TODO Auto-generated method stub
		return "Invalid Phone or Password";
	}
}
