

import React, {useState, useRef, useEffect} from 'react'

const Propsy = (props) => <h1>{props.text}</h1>
 
const Weather3 = () => {

    const [stan, setStan] = useState(0)
    const [stan2, setStan2] = useState(69)
    useEffect(() => {
        setStan2(stan2 + 1)
    },[])
    return (<div>Weather 3<Propsy text="Siemaneczko dzikusy" /><button onClick={() => setStan(stan + 1)}>{stan}</button><button>{stan2}</button></div>)
}

export default Weather3;