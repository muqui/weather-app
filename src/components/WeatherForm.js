import React, { useState } from 'react'

export const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState();
    function onChange(e){
        const value = e.target.value;
        if(value !== '')
            setCity(value);
    }
    function handleSubmit(e){
        e.preventDefault();
        onChangeCity(city)

    }
  return (

    <form onSubmit={handleSubmit} className='container'>
        <input type='text' onChange={onChange} className='input'/>
    </form>
  )
}
