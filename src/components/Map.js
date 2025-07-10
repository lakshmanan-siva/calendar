import React, { useRef, useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { Close } from '@mui/icons-material';

const center = { lat: 12.9716, lng: 77.5946 }; // Default Bangalore
const libraries = ['places'];

const mapContainerStyle = {
  width: '100%',
  height: '80vh',
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const originAutocomplete = useRef();
  const destinationAutocomplete = useRef();

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState(null);
  const [marker, setMarker] = useState(null);

  const handleGetRoute = async () => {
    if (!origin || !destination) return;

    const directionsService = new window.google.maps.DirectionsService();
    const result = await directionsService.route({
      origin,
      destination,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });

    if (result.status === 'OK') {
      setDirections(result);
      const route = result.routes[0].legs[0];
      setDistance(route.distance.text);
    }
  };

  const handleMapClick = (e) => {
    setMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <>
      <div style={styles.controls}>
        <div style={styles.inputWrapper}>
          <Autocomplete
            onLoad={(autoC) => (originAutocomplete.current = autoC)}
            onPlaceChanged={() => {
              const place = originAutocomplete.current.getPlace();
              if (place?.formatted_address) {
                setOrigin(place.formatted_address);
              }
            }}
          >
            <input
              type="text"
              placeholder="Origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              style={styles.input}
            />
          </Autocomplete>
          {origin && (
            <Close
              style={styles.closeIcon}
              onClick={() => setOrigin('')}
            />
          )}
        </div>

        <div style={styles.inputWrapper}>
          <Autocomplete
            onLoad={(autoC) => (destinationAutocomplete.current = autoC)}
            onPlaceChanged={() => {
              const place = destinationAutocomplete.current.getPlace();
              if (place?.formatted_address) {
                setDestination(place.formatted_address);
              }
            }}
          >
            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={styles.input}
            />
          </Autocomplete>
          {destination && (
            <Close
              style={styles.closeIcon}
              onClick={() => setDestination('')}
            />
          )}
        </div>

        <button style={styles.button} onClick={handleGetRoute}>
          Get Route
        </button>

        {distance && (
          <div style={styles.distanceBox}>
            Distance: <strong>{distance}</strong>
          </div>
        )}
      </div>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
        onClick={handleMapClick}
      >
        {marker && <Marker position={marker} />}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </>
  );
}

const styles = {
  controls: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    background: '#f9f9f9',
    borderBottom: '1px solid #ccc',
  },
  inputWrapper: {
    position: 'relative',
    width: '280px',
  },
  input: {
    padding: '12px 40px 12px 16px',
    width: '100%',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  closeIcon: {
    position: 'absolute',
    top: '50%',
    right: '12px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: '#555',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#0d6efd',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  distanceBox: {
    fontSize: '16px',
    backgroundColor: '#e9f7ef',
    padding: '10px 20px',
    borderRadius: '6px',
    color: '#1e7e34',
    border: '1px solid #c3e6cb',
  },
};

export default Map;
