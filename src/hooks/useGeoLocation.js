import { useEffect, useState } from "react";

function useGeoLocation() {
    const [pos, setPos] = useState({
        latitude: '',
        longitude: ''
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Position:", position)
            setPos({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        })
    }, [])

    return pos;
}

export default useGeoLocation;