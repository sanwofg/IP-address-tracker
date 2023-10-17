import "leaflet/dist/leaflet.css"
import { useState } from "react"
import { MapContainer, TileLayer, } from 'react-leaflet'
import MapPosition from "./MapPosition"

import 'bootstrap/dist/css/bootstrap.css';
import loggo from "./icon-arrow.svg"

function Main (){
    const [ip, setIp] =useState('')
    const [location, setlocation] =useState('')
    const [timezone, settimezone] =useState('')
    const [isp, setIsp] =useState('')
    const [ipAddress, setIpAddress] =useState('')
    const [latitude, setLatitude] =useState(51.505)
    const [longtitude, setLongtitude] =useState(0.09)

    

    function submit(e){
         e.preventDefault();
        setIpAddress(e.target.value) 
        
    }
     
    async function apiFetch(){
     const data = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_kSxrxArAweM5ThvnYfKeZunS8Ryha&ipAddress=${ipAddress}`)
     const result = await data.json()
     console.log(result)
     setIp(result.ip)
     setlocation(result.location.region)
     settimezone(result.location.timezone)
     setIsp(result.isp)
     setLatitude(result.location.lat)
     setLongtitude(result.location.lng)
    }
 


    return(
        <div>
            <div className="container-fluid dive">
                <p className="text">IP Address Tracker</p>
                <div>
                    <input 
                    placeholder="search for an 'IP Address'"
                    onChange={submit}

                    />
                    <button onKeyDown={apiFetch} onClick={apiFetch}><img src={loggo} alt="search"/></button>
                    
                </div>

               
            <div className=" infos">
                <div className="separator">
                    <p className="details">IP ADDRESS</p>
                    <p className="display">{ip}</p>
                </div>
                <div className="separator">
                    <p className="details">LOCATION</p>
                    <p className="display">{location}</p>
                </div>
                <div className="separator">
                    <p className="details">TIMEZONE</p>
                    <p className="display">{timezone}</p>
                </div>
                <div className="separator2">
                    <p className="details">ISP</p>
                    <p className="display">{isp}</p>
                </div>
               
            </div>
            </div>
            <div className="map">
                <MapContainer className="map2" center={[ Number(latitude), Number(longtitude)]} zoom={100} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MapPosition  
                        lat = {Number(latitude)} 
                        lng = {Number(longtitude)}
                    /> 
                </MapContainer>
            </div>
        </div>
    ) 
}
export default Main