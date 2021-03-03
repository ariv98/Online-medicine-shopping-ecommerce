package com.cg.oms.vo;

import java.io.Serializable;
import java.time.LocalDateTime;

import com.cg.oms.model.Address;
import com.cg.oms.model.Role;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author Arivazhagan
 *
 */
//@Data
public class UserVo implements Serializable
{

	/**
	 * Generated serialVersionUID
	 */
	private static final long serialVersionUID = -7025398963426256334L;

	/**
	 * Creating Instance variables of class UserVo
	 */
	@JsonProperty(value = "userId")
	private Long userId;
	@JsonProperty(value = "emailId")
	private String emailId;
	@JsonProperty(value = "firstName")
	private String firstName;
	@JsonProperty(value = "lastName")
	private String lastName;
	@JsonProperty(value = "userAge")
	private Integer userAge;
	@JsonProperty(value = "userGender")
	private String userGender;
	@JsonProperty(value = "userPhoneNumber")
	private String userPhoneNumber;
//	@JsonProperty(value = "userPassword", access = Access.WRITE_ONLY)
	private String userPassword;
//	@JsonProperty(value = "confirmPassword", access = Access.WRITE_ONLY)
//	private String confirmPassword;
//	@JsonProperty(value = "previousPassword", access = Access.WRITE_ONLY)
	private String previousPassword1;
//	@JsonProperty(value = "previousPassword1", access = Access.WRITE_ONLY)
	private String previousPassword2;
	@JsonProperty(value = "createdDate")
	private LocalDateTime createdDate = LocalDateTime.now();
	private Role role;
	private Address userAddress;

	/**
	 * Getters and setters methods
	 */
	public Long getUserId()
	{
		return userId;
	}

	public void setUserId(Long userId)
	{
		this.userId = userId;
	}

//	public String getConfirmPassword()
//	{
//		return confirmPassword;
//	}
//
//	public void setConfirmPassword(String confirmPassword)
//	{
//		this.confirmPassword = confirmPassword;
//	}

	public String getEmailId()
	{
		return emailId;
	}

	public Integer getUserAge()
	{
		return userAge;
	}

	public void setUserAge(Integer userAge)
	{
		this.userAge = userAge;
	}

	public void setEmailId(String emailId)
	{
		this.emailId = emailId;
	}

	public String getFirstName()
	{
		return firstName;
	}

	public void setFirstName(String firstName)
	{
		this.firstName = firstName;
	}

	public String getLastName()
	{
		return lastName;
	}

	public void setLastName(String lastName)
	{
		this.lastName = lastName;
	}

	public static long getSerialversionuid()
	{
		return serialVersionUID;
	}

	public String getUserGender()
	{
		return userGender;
	}

	public void setUserGender(String userGender)
	{
		this.userGender = userGender;
	}

	public String getUserPhoneNumber()
	{
		return userPhoneNumber;
	}

	public void setUserPhoneNumber(String userPhone)
	{
		this.userPhoneNumber = userPhone;
	}

	public String getUserPassword()
	{
		return userPassword;
	}

	public void setUserPassword(String userPassword)
	{
		this.userPassword = userPassword;
	}

	public String getPreviousPassword1()
	{
		return previousPassword1;
	}

	public void setPreviousPassword1(String previousPassword1)
	{
		this.previousPassword1 = previousPassword1;
	}

	public String getPreviousPassword2()
	{
		return previousPassword2;
	}

	public void setPreviousPassword2(String previousPassword2)
	{
		this.previousPassword2 = previousPassword2;
	}

	public LocalDateTime getCreatedDate()
	{
		return createdDate;
	}

	public void setCreatedDate(LocalDateTime createdDate)
	{
		this.createdDate = createdDate;
	}

	public Role getRole()
	{
		return role;
	}

	public void setRole(Role role)
	{
		this.role = role;
	}

	public Address getUserAddress()
	{
		return userAddress;
	}

	public void setUserAddress(Address userAddress)
	{
		this.userAddress = userAddress;
	}
}