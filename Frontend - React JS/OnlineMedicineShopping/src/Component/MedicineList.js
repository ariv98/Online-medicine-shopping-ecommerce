import React, { Component } from 'react';
import MedicineService from '../services/MedicineService';

export default class MedicineList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            medicines: []
        }


        this.addMedicine = this.addMedicine.bind(this);
        this.updateMedicine = this.updateMedicine.bind(this);
        //this.deleteMedicine = this.deleteMedicine.bind(this);
    }



    addMedicine() {
       this.props.history.push(`/addmedicine/_add`);
    }

    viewMedicine(id) {
        var mid = parseFloat(id);
        console.log(mid);
        console.log(id);
        this.props.history.push(`/view-medicine/${id}`);
    }

    updateMedicine(id) {
        this.props.history.push(`/update-medicine/${id}`);
    }

    deleteMedicine(id) {
        this.props.history.push(`/delete-medicine/${id}`);
    }

    componentDidMount() {
        document.title = "ADMIN MEDICINE VIEW - YOU CAN PERFORM CRUD OPERATIONS"
        MedicineService.getMedicines().then((res) => {
            this.setState({medicines: res.data});
        });
    }

    render() {
        return (
            <div >
                <h2 className="text-center">MEDICINE LIST</h2>
                <br/>
                <div className = "row">
                <table className = "table table-striped table-bordered">
                <thead>
                <tr>
                <th>MEDICINE ID</th>
                <th>MEDICINE NAME</th>
                <th>MEDICINE CATEGORY</th>
                <th>MEDICINE DESCRIPTION</th>
                <th>MEDICINE PRICE</th>
                <th>MEDICINE MANUFACTURER</th>
                <th>Medicine Quantity</th>
                <th>CRUD OPERATIONS</th>

                </tr>
                </thead>
                
                <tbody>
                {
                    this.state.medicines.map(
                        medicine => 
                        <tr key = {medicine.id}>
                        <td> {medicine.medicineId} </td>
                        <td><b> {medicine.medicineName}</b></td>
                        <td> {medicine.medicineCategory} </td>
                        <td> {medicine.medicineDescription} </td>
                        <td> {medicine.medicinePrice} </td>
                        <td> {medicine.medicineManfacturerName} </td>
                        <td> {medicine.medicineQuantity} </td> 
                        <td>
                        <center>
                        <button onClick = { ()=> this.updateMedicine(medicine.id)}
                        className="btn btn-info" style={{marginBottom: "2px"}}>UPDATE</button><br/>
                        <button style={{marginLeft: "10px", marginBottom: "2px"}} onClick = { ()=> this.viewMedicine(medicine.medicineId)}
                        className="btn btn-info" >View</button><br/>
                        <button style={{marginLeft: "10px", marginBottom: "2px"}} onClick = { ()=> this.deleteMedicine(medicine.medicineId)}
                        className="btn btn-info">DELETE</button>
                        </center>
                        </td>
                        </tr>


                    )
                }
                
                
                </tbody>

                
                
                
                </table>
                
                </div>

            </div>
        )
    }
}
