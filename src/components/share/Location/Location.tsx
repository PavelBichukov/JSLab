import { useGoogleMap } from '@ubilabs/google-maps-react-hooks'
import { useEffect, useRef } from 'react'

import { Input } from 'components/share'

import styles from './Location.module.scss'

const Location = ({ lat, lng, setLng, setLat }) => {
  const map = useGoogleMap()
  const markerRef = useRef()

  useEffect(() => {
    if (!map) return
    markerRef.current = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
    })
  }, [lat, lng, map])

  useEffect(() => {
    if (!markerRef.current) return
    else {
      markerRef.current.setPosition({ lat, lng })
    }
  }, [lat, lng, map])

  return (
    <div className={styles.latLng}>
      <Input
        ref={null}
        variant="number"
        label="Latitude"
        value={lat}
        id="latitude"
        onChange={(event) => setLat(parseFloat(event.target.value))}
        step={0.01}
        className={styles.latitude}
      />
      <Input
        ref={null}
        variant="number"
        label="Longitude"
        value={lng}
        id="longitude"
        onChange={(event) => setLng(parseFloat(event.target.value))}
        step={0.01}
      />
    </div>
  )
}
export default Location
