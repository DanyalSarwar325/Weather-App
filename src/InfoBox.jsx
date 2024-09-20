import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';

export default function InfoBox({ Info }) {
    console.log(Info);
    const [error, setError] = useState(false);
    const [image, setImage] = useState('https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D');

    const hot = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const rainy = "https://images.unsplash.com/photo-1567688993206-43c34131b21f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const moderate = "https://img.freepik.com/premium-photo/weather-thermometer-sand-against-sky-showing-high-ambient-temperature_98862-1683.jpg?w=2000";

    useEffect(() => {
        if (Info.Temperature > 300) {
            setImage(hot);
        } else if (Info.Temperature > 300 && Info.Temperature > 283) {
            setImage(moderate);
        } else  if (Info.Temperature > 263 && Info.Temperature > 273){
            setImage(cold);
        }
    }, [Info.Temperature]);

    const convertToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

    return (
        <div className='boxContent'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title="Weather Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {Info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <div>Temperature: {convertToCelsius(Info.Temperature)}&deg;C </div>
                        <div>Humidity: {Info.Humidity}</div>
                        <div>Temperature-Max: {convertToCelsius(Info.Temp_max)}&deg;C</div>
                        <div>Temperature-Min: {convertToCelsius(Info.Temp_min)}&deg;C</div>
                        The Weather can be described as <i>Haze</i> and feels like {convertToCelsius(Info.Feels_like)}&deg;C
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
