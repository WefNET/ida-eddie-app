import React from "react";
import GoogleMapReact from 'google-map-react';

const renderMarkers = ({ map, maps }: { map: any, maps: any }) => {
	let marker = new maps.Marker({
		// 41.885242, -87.671615
		position: { lat: 41.885242, lng: -87.671615 },
		map,
		title: 'Moses and Edwards first store'
	});
	return marker;
};

const Marker = ({ lat, lng, txt }: { lat: number, lng: number, txt: string }) => {
	return <>
		<div className="pin2"></div>
	</>
}

const key = "AIzaSyAG7EYVrhZHF8vFz063G2ih6eoQlkC-48Q";

// center @41.8832321,-87.6719527,16.5z
// lake and wood 41.8850991,-87.6716978

export default function MapOfPoints() {
	const defaultProps = {
		center: {
			lat: 41.8832321,
			lng: -87.6719527
		},
		zoom: 16
	};

	return (
		// Important! Always set the container height explicitly
		<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: key, language: 'en' }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<Marker lat={41.8850991} lng={-87.6716978} txt="Moses and Edward's First Store" />
			</GoogleMapReact>
		</div>
	);
}