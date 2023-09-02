import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="google-map-marker">{text}</div>;

export default function SimpleMap(){
const defaultProps = {
    center: {
    lat: 37.4683796,
    lng: 127.0390439
    },
    zoom: 16
};

return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
    <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDC3IBAoXtMXfHcVCyWpBefqum8IlVXFRE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
    >
        <AnyReactComponent
        lat={37.4683796}
        lng={127.0390439}
        text="aT포레웨딩홀"
        />
    </GoogleMapReact>
    </div>
);
}

