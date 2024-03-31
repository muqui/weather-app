import React, { useEffect } from 'react'
import { useState } from 'react';
import { WeatherForm } from './WeatherForm';
import { WeatherMainInfo } from './WeatherMainInfo';
import { Loading } from './Loading';

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  useEffect(()=>{
  loadInfo();
  }, []);  //areglo vacio se ejecuta solo una vez cuando se crea el componente.

  useEffect(()=>{
    document.title = `Weather | ${weather?.location.name ?? ""}`
  }, [weather])  //se ajecuta cada que hay un cambio en el estado de weather.
  async function loadInfo(city = 'Zapopan'){
    try {
        const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
        const json = await request.json();
        setWeather(json);
        
       
        
        
    } catch (error) {
       
    }
  
  }
  function handleChangeCity(city){
    setWeather(null);
    loadInfo(city);

  }

  return (
    <div className='weatherContainer'>
        <WeatherForm onChangeCity={handleChangeCity} />
       {weather ?  <WeatherMainInfo  weather ={weather}/>: <Loading/>}
    </div>
  )
}
