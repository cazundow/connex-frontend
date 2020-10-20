import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Loader from './loader'; 

import './css/timestamps.css'

const Timestamps = props => {
    const [timeStamps, setTimeStamps] = useState([]); 
    const [err, setErr] = useState(false); 
    const [loading, setLoading] = useState(false); 
    // getTime();
    useEffect(() => {
        getTime();
    }, [])


    useEffect(() => {
        setTimeout(()=>{
            getTime();
        }, 30000)
       
    }, [timeStamps])
     const t= timeStamps.sort(function(a, b) { return a- b})
     .map( (item, i) =>{
         let date = new Date(item)
         let niceDate = date.toLocaleString(); 
        let s = date.getSeconds();
        let m = date.getMinutes(); 
        let h = date.getHours();
         let time = <p>{h}:{m}:{s}</p>

     return <div  key={i} >
                 <p className="time">{item}</p>
                 {time}
             </div>
     
     })

    return (
        <div className="timestmps_wrap col-xs-12 col-sm-6">
            
            { loading ? <Loader />  : t}
        </div>
    )

    async function getTime(){
        setLoading(true);
       let response =  await fetch('http://localhost:3001', {
        headers: new Headers({
            method: 'get', 
            "Authorization": `mysecrettoken`
          })
       }); 
        let time = await response.json();
         if(time.status != 200) {
            setErr(true)
         }
         const newState =  [...timeStamps, time.time]
         
         setTimeStamps(newState);
         setLoading(false);
       
    }
}

Timestamps.propTypes = {

}

export default Timestamps
