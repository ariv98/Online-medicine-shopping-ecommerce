import React, { Component } from 'react'
import Header from './Header'

export default class ShowMedicine extends Component {
    render() {
        constructor(props) {
            super(props)
    
            this.state = {
                id: this.props.match.params.id,
                medicine: {}
            }
        }

        componentDidMount() {
            MedicineService.getMedicineById(this.state.id).then( res => {
                this.setState({medicine: res.data});
                console.log(res.data);
            })
        }





        return (
            
            <div className="container">
                <Header/>
                <div className="container-fluid">
            <br/>


            <div className="row" style={{marginTop: "100px"}}>
            
            <div className="col-5 offset-md-2 float-left">
            <center>
            <img src = {this.state.medicine.imageDir} width="300px" height="300px"/>
            </center>
            </div>
            <div className="col-6 offset-md-2 order-2 mr-5">
            <h1>{ this.state.medicine.medicineName }</h1>
            <br/>
            <div><b>Medicine Category : </b><strong> { this.state.medicine.medicineCategory }</strong></div><br/>
            <div><b>Manufactured By :</b><strong>{ this.state.medicine.medicineManfacturerName }</strong></div><br/>
            <div><b>Medicine Description :</b><pre>{ this.state.medicine.medicineDescription }</pre></div><br/><br/>
            <div><strong><b>Price :  ₹ {medicine.medicinePrice} </b></strong></div>
            <strong><b>Actual Price: <strike> ₹ {medicine.medicinePrice + medicine.medicinePrice*0.10}</strike></b></strong>
            </div>
            </div>
            


            </div>




        
        
        
        
        
        
        
            </div>
        )
    }
}
