import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
 export default function SearchBox({updateInfo}){
    let url= "http://api.openweathermap.org/data/2.5/weather"
    let id="111cacdc6d89478c4a039941318f7db8";

    let [City,setCity]=useState("");
let WeatherData= async ()=>{
   let data=await fetch(`${url}?q=${City}&appid=${id}`)
   let jsonData=await data.json();
   console.log(jsonData)
   let result={
    city:City,
    Temperature:jsonData.main.temp,
    Humidity:jsonData.main.humidity,
    Temp_max:jsonData.main.temp_max,
    Temp_min:jsonData.main.temp_min,
    Feels_like:jsonData.main.feels_like,

   }
   console.log(result)
   return result;
}




     let handleChange=(e)=>{
        setCity(e.target.value);
    }
     let handleSubmission= async (e)=>{
        e.preventDefault();
        console.log(City);
        setCity("")
        let result=await  WeatherData();
        updateInfo(result);
    }
    return(
        <div className='box'>
            <form onSubmit={handleSubmission}>
        <TextField id="city" label="Enter City" variant="outlined"  value={City} onChange={handleChange}/>
        <br></br>  <br></br>
        <Button variant="contained" type='submit'>Search</Button>
        </form>
        </div>
    )
}
