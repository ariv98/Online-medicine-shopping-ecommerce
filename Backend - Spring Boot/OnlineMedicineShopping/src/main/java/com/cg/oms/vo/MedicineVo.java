
package com.cg.oms.vo;

import java.io.Serializable;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;

@Data
public class MedicineVo implements Serializable
{
	/**
	 * Generated serialVersionUID
	 */
	private static final Long serialVersionUID = 7150266644906337644L;
	@JsonProperty(value = "medicineId", access = Access.READ_ONLY)
	private Long medicineId;
	@JsonProperty(value = "medicineName")
	private String medicineName;
	@JsonProperty(value = "medicineCategory")
	private String medicineCategory;
	@JsonProperty(value = "medicineDescription")
	private String medicineDescription;
	@JsonProperty(value = "medicinePrice")
	private Double medicinePrice;
	@JsonProperty(value = "medicineManfacturerName")
	private String medicineManufacturerName;
	@JsonProperty(value = "medicineManufacturerDate")
	private LocalDateTime medicineManufacturerDate = LocalDateTime.now();
	@JsonProperty(value = "medicineExpiryDate")
	private LocalDateTime medicineExpiryDate = LocalDateTime.now();
	@JsonProperty(value = "medicineQuantity")
	private Integer medicineQuantity;
	@JsonProperty(value = "imageDir")
	private String imageDir;

	/**
	 * Getters and Setters
	 * 
	 * @return
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

	public LocalDateTime getMedicineManufacturerDate()
	{
		return medicineManufacturerDate;
	}

	public void setMedicineManufacturerDate(LocalDateTime medicineManufacturerDate)
	{
		this.medicineManufacturerDate = medicineManufacturerDate;
	}

	public LocalDateTime getMedicineExpiryDate()
	{
		return medicineExpiryDate;
	}

	public void setMedicineExpiryDate(LocalDateTime medicineExpiryDate)
	{
		this.medicineExpiryDate = medicineExpiryDate;
	}

	public Integer getMedicineQuantity()
	{
		return medicineQuantity;
	}

	public void setMedicineQuantity(Integer medicineQuantity)
	{
		this.medicineQuantity = medicineQuantity;

	}

	public String getImageDir()
	{
		return imageDir;
	}

	public void setImageDir(String imageDir)
	{
		this.imageDir = imageDir;
	}

}