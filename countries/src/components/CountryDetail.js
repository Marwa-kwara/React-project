// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// export default function CountryDetail({ match }) {
//   const [Country, setCountry] = useState({});
//   let { name } = useParams();

//   useEffect(() => {
//     getOneCountry();
//   }, [name]);

//   const getOneCountry = async () => {
//     const countryData = await fetch(
//       `https://restcountries.eu/rest/v2/alpha/${name}`
//     );
//     const countryResponse = await countryData.json();
//     console.log(countryResponse);
//     setCountry(Country);
//   };

//   return (
//     <div>
//       {Country.map((country) => {
//         const { capital, alpha2Code, alpha3Code, languages } = country;
//         return (
//           <div>
//             <h1>Capital: {capital}</h1>
//             <h2>Alpha‑2 code:{alpha2Code}</h2>
//             <h2>Alpha‑3 code:{alpha3Code}</h2>
//             <h2>Languages: {languages}</h2>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
