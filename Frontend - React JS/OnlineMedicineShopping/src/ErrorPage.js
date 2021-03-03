import React, { Component } from 'react'

export class ErrorPage extends Component {
    render() {
        const mystyle = {
            backgroundImage: `url("https://www.sumydesigns.com/wp-content/uploads/2019/03/404-error.jpg")`,
            width:'100% ',
            height:'100%',
            position:'fixed',
            backgroundSize:"cover",
            backgroundPosition:"center"
        };
        const buttonstyle={
            margin: '0',
            position: 'absolute',
            top: '70%',
            transform: 'translateX(-285%)',
            backgroundColor: 'darkred',
            color:'aliceblue',
            borderWidth:'initial',



        };
        return (
            <div style={mystyle}>
                <button style={buttonstyle}>Back to HomePage</button>
            
            </div>
        )
    }
}

export default ErrorPage;
