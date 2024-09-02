import React, { useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px',
};

const center = {
    lat: 41.047505,
    lng: 15.782228
};

const position = {
    lat: 41.047505,
    lng: 15.782229
};

function MapComponent() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    return (
        <>
            {isLoaded ? (
                <GoogleMap
                    center={center}
                    zoom={18}
                    mapContainerStyle={containerStyle}
                >
                    <MarkerF position={position} />
                </GoogleMap>
            ) : null}
        </>
    );
}

export default MapComponent;

