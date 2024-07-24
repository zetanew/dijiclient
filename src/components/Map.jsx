import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import turkeyMapData from './tr-cities.json';
import setSelectedCity from '../App';
const Map = ({ setSelectedCity }) => {
  const onEachFeature = (feature, layer) => {
    layer.on({
      click: () => {
        const cityName = feature.properties.name;
        let cityPlateNumber;
      
        switch (cityName) {
          case 'Adana':
            cityPlateNumber = 1;
            break;
          case 'Adıyaman':
            cityPlateNumber = 2;
            break;
          case 'Afyon':
            cityPlateNumber = 3;
            break;
          case 'Ağrı':
            cityPlateNumber = 4;
            break;
          case 'Amasya':
            cityPlateNumber = 5;
            break;
          case 'Ankara':
            cityPlateNumber = 6;
            break;
          case 'Antalya':
            cityPlateNumber = 7;
            break;
          default:
            cityPlateNumber = 'Unknown';
        }
      
        setSelectedCity(`${cityName} (Plaka No: ${cityPlateNumber})`);
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
    </div>
  );
};

export default Map;