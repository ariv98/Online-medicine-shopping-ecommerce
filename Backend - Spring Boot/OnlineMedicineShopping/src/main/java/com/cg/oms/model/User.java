package com.cg.oms.model;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * UserEntity class
 * 
 * @author Arivazhagan
 *
 */
//@Component
@Entity
@Table(name = "user_table")
public class User
{
	/**
	 * Creating Instance variables of class User
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	private String emailId;
	private String firstName;
	private String lastName;
	private Integer userAge;
	private String userGender;
	private String userPhoneNumber;
	private String userPassword;
//	private String confirmPassword;
	private String previousPassword1;
	private String previousPassword2;
	private LocalDateTime createdDate = LocalDateTime.now();
	@OneToOne(cascade = CascadeType.MERGE)
	private Role role;
	@OneToOne(cascade = CascadeType.ALL)
	private Address userAddress;

	/**
	 * creating default constructors
	 * 
	 * 
	 */
	public User()
	{
		super();
	}

	/**
	 * Getter and Setter methods
	 * 
	 */
	public Long getUserId()
	{
		return userId;
	}

	public void setUserId(Long userId)
	{
		this.userId = userId;
	}

	public String getEmailId()
	{
		return emailId;
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

	public void setEmailId(String emailId)
	{
		this.emailId = emailId;
	}

	public LocalDateTime getCreatedDate()
	{
		return createdDate;
	}

	public void setCreatedDate(LocalDateTime createdDate)
	{
		this.createdDate = createdDate;
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

	public Integer getUserAge()
	{
		return userAge;
	}

	public void setUserAge(Integer userAge)
	{
		this.userAge = userAge;
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

	/**
	 * Overriding and implementing toString method
	 */
	@Override
	public String toString()
	{
		return "User [emailId=" + emailId + ", userAge=" + userAge + ", userGender=" + userGender + ", userPhone="
				+ userPhoneNumber + ", password=" + userPassword + ", previousPassword1=" + previousPassword1
				+ ", previousPassword2=" + previousPassword2 + ", createdDate=" + createdDate + ", role=" + role
				+ ", address=" + userAddress + "]";
	}
}