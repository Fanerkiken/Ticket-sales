import React, { useEffect } from 'react'
import styles from './Maps.module.scss'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import L from 'leaflet'

import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const Maps = () => {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIconRetina,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    })
  }, [])

  return (
    <>
      <div className={styles.mapContainer}>
        <div className={styles.map}>
          <MapContainer
            // @ts-ignore
            center={[52.43251595682394, 30.992946624755863]}
            zoom={17}
            scrollWheelZoom={false}
            style={{ height: '300px', width: '300px' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[52.43251595682394, 30.992946624755863]} />
          </MapContainer>
        </div>
        <div className={styles.map}>
          <MapContainer
            // @ts-ignore
            center={[55.6204692698147, 37.426697015762336]}
            zoom={17}
            scrollWheelZoom={false}
            style={{ height: '300px', width: '300px' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[55.6204692698147, 37.426697015762336]} />
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Maps
