import { useEffect, useMemo, useRef, useState } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import React from 'react';
import { Spinner } from 'reactstrap';
import SearchPlaceInput from '../SearchPlaceInput';

const Maps = () => {
  const libraries = useMemo(() => ['places'], []);
  const [mapCenter, setMapCenter] = useState({ lat: 37.3947, lng: 127.1112 });
  const mapRef = useRef();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setMapCenter({ lat: latitude, lng: longitude });
      });
    }
  }, []);
  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: libraries,
  });
  if (!isLoaded) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '428px', height: '926px' }}
        onLoad={() => console.log('Map Component Loaded...')}
        ref={mapRef}
      >
        <SearchPlaceInput mapRef={mapRef} mapCenter={mapCenter} />
      </GoogleMap>
    </>
  );
};

export default Maps;
