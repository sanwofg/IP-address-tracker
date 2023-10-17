import { useEffect } from "react";
import Icon from "./Icon";
import {useMap, Marker, Popup} from "react-leaflet"

function MapPosition(props){
    const position = [props.lat, props.lng]
    const map = useMap()
    useEffect(
        ()=>{
            map.flyTo(position, 13,{
                animate: true,
            })
        }, [map, position]
    )

    return(

    <Marker icon={Icon} position={position}>
        <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
    </Marker>
    )

}
export default MapPosition