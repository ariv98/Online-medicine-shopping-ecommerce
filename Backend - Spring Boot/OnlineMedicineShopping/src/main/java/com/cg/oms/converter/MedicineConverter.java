package com.cg.oms.converter;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.cg.oms.model.Medicine;
import com.cg.oms.vo.MedicineVo;


/**
 * This function is used to convert the Medicine object to the MedicineVo Object and vise versa
 * this is used for getting and returning the object for security purpose.
 * @author Inam - PC
 *
 */

@Component
public class MedicineConverter
{
	
	/**
	 *  This method converts model object to value object
	 * 
	 * @param medicine
	 * @return
	 */

	public MedicineVo modelToVo(Medicine medicine)
	{
		MedicineVo medicineVo = new MedicineVo();
		medicineVo.setMedicineId(medicine.getMedicineId());
		medicineVo.setMedicineCategory(medicine.getMedicineCategory());
		medicineVo.setMedicineDescription(medicine.getMedicineDescription());
		medicineVo.setMedicineExpiryDate(medicine.getMedicineExpiryDate());
		medicineVo.setMedicineManufacturerDate(medicine.getMedicineManufactureDate());
		medicineVo.setMedicineManufacturerName(medicine.getMedicineManufacturerName());
		medicineVo.setMedicineName(medicine.getMedicineName());
		medicineVo.setMedicinePrice(medicine.getMedicinePrice());
		medicineVo.setMedicineQuantity(medicine.getMedicineQuantity());
		medicineVo.setImageDir(medicine.getImageDir());
		return medicineVo;
	}
	
	/**
	 * This method converts model object to value object
	 * @param medicine
	 * @return
	 */
	
	public List<MedicineVo> modelToVo(List<Medicine> medicine)
	{
		return medicine.stream().map(x -> modelToVo(x)).collect(Collectors.toList());
	}

	public Medicine voToModel(MedicineVo medicineVo)
	{
		Medicine medicine = new Medicine();
		medicine.setMedicineId(medicineVo.getMedicineId());
		medicine.setMedicineCategory(medicineVo.getMedicineCategory());
		medicine.setMedicineDescription(medicineVo.getMedicineDescription());
		medicine.setMedicineExpiryDate(medicineVo.getMedicineExpiryDate());
		medicine.setMedicineManufactureDate(medicineVo.getMedicineManufacturerDate());
		medicine.setMedicineManufacturerName(medicineVo.getMedicineManufacturerName());
		medicine.setMedicineName(medicineVo.getMedicineName());
		medicine.setMedicinePrice(medicineVo.getMedicinePrice());
		medicine.setMedicineQuantity(medicineVo.getMedicineQuantity());
		medicine.setImageDir(medicineVo.getImageDir());
		return medicine;
	}
	
	
	/**
	 * This method converts value object to model object
	 * @param medicineVo
	 * @return
	 */

	public List<Medicine> voToModel(List<MedicineVo> medicineVo)
	{
		return medicineVo.stream().map(x -> voToModel(x)).collect(Collectors.toList());
	}

}
