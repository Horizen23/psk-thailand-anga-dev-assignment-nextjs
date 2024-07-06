'use client'

import React from 'react';
import styled from 'styled-components';

const WeatherContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  margin-top:70px;
`;

const Location = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const Temperature = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #555;
`;

const Condition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  img {
    margin-right: 10px;
    width: 40px;
  }

  span {
    color: #777;
  }
`;

const Details = styled.div`
  font-size: 0.9em;
  color: #888;
  margin-top: 20px;

  div {
    margin-bottom: 5px;
  }
`;

const Weather = ({ data }:any) => {
  const { location, current } = data;

  return (
    <WeatherContainer>
      <Location>
        {location.name}, {location.region}, {location.country}
      </Location>
      <Temperature>{current.temp_c}°C / {current.temp_f}°F</Temperature>
      <Condition>
        <img src={current.condition.icon} alt={current.condition.text} />
        <span>{current.condition.text}</span>
      </Condition>
      <Details>
        <div>Humidity: {current.humidity}%</div>
        <div>Wind: {current.wind_kph} kph ({current.wind_dir})</div>
        <div>Pressure: {current.pressure_mb} mb</div>
        <div>Visibility: {current.vis_km} km</div>
        <div>UV Index: {current.uv}</div>
      </Details>
    </WeatherContainer>
  );
};

export default Weather;
