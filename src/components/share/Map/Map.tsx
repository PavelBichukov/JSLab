import { useJsApiLoader } from '@react-google-maps/api'
import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks'
import { useState } from 'react'

import { Location } from 'components/share'

import styles from './Map.module.scss'

const Map = ({
  lat,
  lng,
  setLat,
  setLng,
}: {
  lat: any
  lng: any
  setLat: any
  setLng: any
}) => {
  const [mapContainer, setMapContainer] = useState<any>()
  const mapOptions = {
    zoom: 12,
    center: {
      lat: lat,
      lng: lng,
    },
  }
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  })
  return isLoaded ? (
    <GoogleMapsProvider
      googleMapsAPIKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      mapOptions={mapOptions}
      mapContainer={mapContainer}
    >
      <div
        ref={(node): any => setMapContainer(node)}
        className={styles.mainMap}
      />
      <Location lat={lat} lng={lng} setLat={setLat} setLng={setLng} />
    </GoogleMapsProvider>
  ) : (
    <></>
  )
}

export default Map
