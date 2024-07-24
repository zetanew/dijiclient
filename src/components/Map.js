import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import turkeyMapData from './tr-cities.json';

const Map = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: () => {
        setSelectedCity(feature.properties.name);
      },
      mouseover: () => {
        layer.setStyle({
          weight: 1,
          color: 'yellow',
        });
      },
      mouseout: () => {
        layer.setStyle({
          weight: 1,
          color: 'black',
        });
      }
    });
  };

  const style = (feature) => ({
    color: 'black',
    weight: 1,
    opacity: 1,
  });

  return (
    <div>
     
      <MapContainer style={{ height: '400px', width: '800px' }} center={[39, 35]} zoom={5}>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN"
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors'
        />
        <GeoJSON data={turkeyMapData} onEachFeature={onEachFeature} style={style} />
      </MapContainer>
      {selectedCity && <div>Seçilen Şehir: {selectedCity}</div>}
    </div>
  );
};

export default Map;
