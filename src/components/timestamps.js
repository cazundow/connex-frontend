import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Loader from './loader'; 
import base64 from 'base-64';

import './css/timestamps.css'

const Timestamps = props => {
    const [timeStamps, setTimeStamps] = useState([]); 
    const [err, setErr] = useState(false); 
    const [diffence, setDiffence] = useState(""); 
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
     const t= timeStamps
     .map( (item, i) =>{
         let date = new Date(item)        
    if(i ===0){

        return <div  key={i} >
                 <p className="time">{item}</p>
                 <p>{diffence}</p>
             </div>
        }
        else {
            return <div  key={i} >
            <p className="time">{item}</p>
            </div>
       
        }
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
            "Authorization":'Basic ' + base64.encode('' + ":" + 'mysecrettoken') 
          })
       }); 
        let time = await response.json();
         if(time.status != 200) {
            setErr(true)
         }
         const newState =  [...timeStamps, time.time]
         
         setTimeStamps(newState);
         setLoading(false);
         calcDiff(time.time);
    }
     function calcDiff(date) {

        setInterval(() => {
        
            let ct = Date.now(); 
            let dif = (ct - date);
            var days = Math.floor(dif / (1000 * 60 * 60 * 24));
            var hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((dif % (1000 * 60)) / 1000);
            console.log(hours,minutes,seconds)
            setDiffence(`${hours<10?0:''}${hours}:${minutes<10?0:''}${minutes}:${seconds<10?0:''}${seconds}`);
        }, 1000);
             
    }
}

Timestamps.propTypes = {

}

export default Timestamps
