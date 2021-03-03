// import React, { Component } from "react";
// import countries from "./countries";

// export default function viewUser() {
//   const [email, setEmail] = React.useState("");
//   const [name, setName] = React.useState("");
//   const [state, setState] = React.useState("");
//   const [age, setAge] = React.useState("");
//   const [flatno, setFlatno] = React.useState("");
//   const [street, setStreet] = React.useState("");
//   const [city, setCity] = React.useState("");
//   const [pincode, setPincode] = React.useState("");
//   const [country, setCountry] = React.useState("");
//   false;

//   const handleSubmit = event => {
//     console.log(`
    
//       Email: ${email}
//       name: ${name}
//       age: ${age}
//       street: ${street}
//       Country: ${country}
//     `);

//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>View User</h1>
//       <label>
//         <b>Basic Info</b>
//       </label>
//       <br />

//       <label for="name">
//         Name:
//         <input
//           name="name"
//           type="name"
//           value={name}
//           onChange={e => setName(e.target.value)}
//           required
//         />
//       </label>

//       <label>
//         Email:
//         <input
//           name="email"
//           type="email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           required
//         />
//       </label>

//       <label for="gender">Choose your Gender:</label>
//       <select id="gender" name="Gender">
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//         <option value="Others">Others</option>
//         onChange={e => setgender(e.target.value)}
//         required
//       </select>

//       <label for="age">
//         Age:
//         <input
//           name="age"
//           type="age"
//           value={age}
//           onChange={e => setAge(e.target.value)}
//           required
//         />
//       </label>

//       <label for="phone">
//         Enter your phone number:
//         <input
//           type="tel"
//           id="phone"
//           name="phone"
//           pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
//         />
//       </label>
//       <br />

//       <label>
//         <b>Address</b>
//       </label>

//       <br />
//       <label>Flat No:</label>
//       <input
//         name="flatno"
//         type="flatno"
//         value={flatno}
//         onChange={e => setFlatno(e.target.value)}
//         required
//       />
//       <label>Street:</label>
//       <input
//         name="street"
//         type="street"
//         value={street}
//         onChange={e => setStreet(e.target.value)}
//         required
//       />

//       <label>City:</label>
//       <input
//         name="city"
//         type="city"
//         value={city}
//         onChange={e => setCity(e.target.value)}
//         required
//       />

//       <label>Pincode:</label>
//       <input
//         name="pincode"
//         type="pincode"
//         value={pincode}
//         onChange={e => setPincode(e.target.value)}
//         required
//       />

//       <label>
//         State:
//         <select
//           name="state"
//           value={state}
//           onChange={e => setState(e.target.value)}
//           required
//         >
//           <option key="" />
//           {countries.map(country => (
//             <option key={country}>{country}</option>
//           ))}
//         </select>
//       </label>

//       <label>
//         Country:
//         <select
//           name="country"
//           value={country}
//           onChange={e => setCountry(e.target.value)}
//           required
//         >
//           <option key="" />
//           {countries.map(country => (
//             <option key={country}>{country}</option>
//           ))}
//         </select>
//       </label>

//       <button>Save</button>
//     </form>
//   );
// }
