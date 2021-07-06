import React, {useState, useRef, useEffect} from 'react'
import axios from "axios"
// STYLE
import "../sass/header.scss"

// IMAGES
import logo from "../assets/cloud-sun.svg"
import hamburger from "../assets/text-right.svg"
import closeBtn from "../assets/x.svg"
// import geogroup from "../assets/geogroup.svg"

import cursor from "../assets/cursor.svg"
import geo from "../assets/geo.svg"
import people from "../assets/people.svg"
import geoAlt from "../assets/geo-alt-header.svg"
import alarm from "../assets/alarm.svg"
const Header = () => {
    const [menuHeight, setMenuHeight] = useState(0)
    const [displayStyle, setDisplayStyle] = useState("none")
    const [trigger, setTrigger] = useState(false)
    const [fetched, setFetched] = useState({ ipaddress: "connecting...", isp: "", org: "", as: "", region: "", timezone: ""})
    
   

    useEffect(() => {
        const fetchData = async () => {
            const address = await axios(
                `http://ip-api.com/json/`
            )
            setFetched({ ipaddress: address.data.query, isp: address.data.isp, org: address.data.org, as: address.data.as, region: address.data.regionName, timezone: address.data.timezone})
           
        };
        fetchData();
       
    },)

    
    const Click = () => {
        
        
        setMenuHeight(300)
        setTrigger(!trigger)

        if (trigger === true) {
            setMenuHeight(0)
            setDisplayStyle("none")
            
        }
        if (trigger === false) {
            setMenuHeight(300)
            setDisplayStyle("grid")
        }
    
    }
    
    return (<header>
        <div className="expand-menu" style={{height: `${menuHeight}px`, display: `${displayStyle}`} }>
             <div className="header-geolocation">
                 <h1>You are connecting <span>from</span></h1>
                 <ul>
                     <li><img src={cursor} alt="" /><span>{fetched.ipaddress}</span></li>
                     <li><img src={geo} alt="" /><span>{fetched.isp}</span></li>
                     <li><img src={people} alt="" /><span>{fetched.org}</span></li>
                     <li><img src={geoAlt} alt="" /><span>{fetched.region}</span></li>
                     <li><img src={alarm} alt="" /><span>{fetched.timezone}</span></li>
                 </ul>
             </div>
            </div>
        <div className="header-container">
        <div><img src={logo} className="header-logo" alt="Weather App" /></div>
        <div><h1>Weather <span>APP</span></h1></div>
        <div><img src={trigger === false ? hamburger: closeBtn} alt="Open menu" onClick={Click}/></div>
        </div>
    </header>)
}

export default Header;