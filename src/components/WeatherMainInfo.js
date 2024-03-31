import React from "react";

export const WeatherMainInfo = ({ weather }) => {
  return (
    <div className="mainInfo">
      <div  className="city">{weather?.location.name}</div>
      <div  className="country">{weather?.location.country}</div>
      <div className="row">
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="128"
            alt={weather?.current.condition.icon}
          />
        </div>
        <div  className="weatherConditions">
          <div  className="conditions">{weather?.current.condition.text}</div>
          <div  className="current">{weather?.current.temp_c}°</div>
        </div>
      </div>
    
    
      <iframe
        
        title="mapa"
        width="100%"
        height="350"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${weather?.location.lon-0.2}%2C${weather?.location.lat-0.3}%2C${weather?.location.lon+0.2}%2C${weather?.location.lat+0.2}&amp;layer=mapnik`}
        style={{margin: 0, padding: 0 , border: 1}}
      ></iframe>
    </div>
  );
};
