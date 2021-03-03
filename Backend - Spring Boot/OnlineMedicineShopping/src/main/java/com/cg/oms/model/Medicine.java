package com.cg.oms.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

/**
 * 
 * @author
 *
 */
@Entity
@Component
public class Medicine
{
	/**
	 * Creating Instance variables for MedicineEntity class
	 */

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long medicineId;
	private String medicineName;
	private String medicineCategory;
	private String medicineDescription;
	private Double medicinePrice;
	private String medicineManufacturerName;
	private LocalDateTime medicineManufactureDate = LocalDateTime.now();
	private LocalDateTime medicineExpiryDate = LocalDateTime.now();

	private Integer medicineQuantity;
	private String imageDir;

	/**
	 * 
	 * creating default constructors
	 */
	public Medicine()
	{
		super();
	}

	/**
	 * Creating setter and getter methods
	 */
	public Long getMedicineId()
	{
		return medicineId;
	}

	public void setMedicineId(Long medicineId)
	{
		this.medicineId = medicineId;
	}

	public String getMedicineName()
	{
		return medicineName;
	}

	public void setMedicineName(String medicineName)
	{
		this.medicineName = medicineName;
	}

	public String getMedicineCategory()
	{
		return medicineCategory;
	}

	public void setMedicineCategory(String medicineCategory)
	{
		this.medicineCategory = medicineCategory;
	}

	public String getMedicineDescription()
	{
		return medicineDescription;
	}

	public void setMedicineDescription(String medicineDescription)
	{
		this.medicineDescription = medicineDescription;
	}

	public Double getMedicinePrice()
	{
		return medicinePrice;
	}

	public void setMedicinePrice(Double medicinePrice)
	{
		this.medicinePrice = medicinePrice;
	}

	public String getMedicineManufacturerName()
	{
		return medicineManufacturerName;
	}

	public void setMedicineManufacturerName(String medicineManufacturerName)
	{
		this.medicineManufacturerName = medicineManufacturerName;
	}

	public LocalDateTime getMedicineManufactureDate()
	{
		return medicineManufactureDate;
	}

	public void setMedicineManufactureDate(LocalDateTime medicineManufactureDate)
	{
		this.medicineManufactureDate = medicineManufactureDate;
	}

	public LocalDateTime getMedicineExpiryDate()
	{
		return medicineExpiryDate;
	}

	public void setMedicineExpiryDate(LocalDateTime medicineExpiryDate)
	{
		this.medicineExpiryDate = medicineExpiryDate;
	}

	public void setMedicineQuantity(Integer medicineQuantity)
	{
		this.medicineQuantity = medicineQuantity;
	}

	public Integer getMedicineQuantity()
	{
		return medicineQuantity;
	}

	public String getImageDir()
	{
		return imageDir;
	}

	public void setImageDir(String imageDir)
	{
		this.imageDir = imageDir;
	}

	/**
	 * Implementing and overriding toString method to retrieve all values in the
	 * instance of Medicine Class
	 */

	@Override
	public String toString()
	{
		return "Medicine [medicineId=" + medicineId + ", medicineName=" + medicineName + ", medicineCategory="
				+ medicineCategory + ", medicineDescription=" + medicineDescription + ", medicinePrice=" + medicinePrice
				+ ", medicineManufacturerName=" + medicineManufacturerName + ", medicineManufactureDate="
				+ medicineManufactureDate + ", medicineExpiryDate=" + medicineExpiryDate + ", medicineQuantity="
				+ medicineQuantity + "]";
	}

}