/** @format */
import { useState } from 'react'
import ReactMapGL, { Popup } from 'react-map-gl'
import { getCenter } from 'geolib'
import { Marker } from 'react-map-gl'
import { LocationMarkerIcon } from '@heroicons/react/outline'

function Map({ searchResults }) {
	const [selectedLocation, setSelectedLocation] = useState({})

	const coordinates = searchResults.map((result) => ({
		longitude: result.long,
		latitude: result.lat,
	}))

	console.log(selectedLocation)

	const center = getCenter(coordinates)

	const [viewport, setViewPort] = useState({
		width: '100%',
		height: '100%',
		longitude: center.longitude,
		latitude: center.latitude,
		zoom: 11,
	})

	return (
		<ReactMapGL
			mapStyle='mapbox://styles/kyumho/cl2kfk122000s14mfsjbwbaij'
			mapboxAccessToken={process.env.mapbox_key}
			{...viewport}
			onDrag={(e) => setSelectedLocation(e)}></ReactMapGL>
	)
}
export default Map
