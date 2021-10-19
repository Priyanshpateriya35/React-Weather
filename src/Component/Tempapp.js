import React, {useEffect, useState} from 'react'
import './css/Style.css'
 


const Tempapp = () =>{ 
const [city, setcity] = useState(null);
const [search, setsearch] = useState("Indore");

useEffect(() => {
 const fetchApi = async () =>{
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fa73d04e2088221f9ea7d242767de7ec` ;

   const response = await fetch(url);
   const resjson =await response.json();
   //console.log(resjson)
   setcity(resjson.main);
   //console.log(resjson.main)
  }
   fetchApi();
}, [search]  )

  return (
<>
     <div className="box"> 
      <div className="inputData">
      <input type="search" value={search} maxLength="18" className="inputFeild"
      onChange={ event => {
      setsearch(event.target.value) } }>
      </input> 
      </div>
 
 {!city ? (<p>No Data Found!</p>) : 
 ( <div> 
  
          <div className="info">
           <h2 className="location">
        <i id="icon"  className="fas fa-street-view"></i> <i id="text1">{search}</i>   
           </h2>        
        <h1 className="temp">{city.temp}°C</h1>
        <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
         </div>
         <div className="cloud">
            {/* page not created if you want to add some cloud you can create and put hare additionl Css. */}
         </div>
 </div> 
 )} 
         </div>
</>
  );
}

export default  Tempapp;
