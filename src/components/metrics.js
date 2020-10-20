import React, {useState, useEffect} from 'react';
import Loader from './loader'; 
import PropTypes from 'prop-types'

import './css/metrics.css'


export default function Metrics(props) {
const [metrics, setMetrics] = useState([]); 
const [err, setErr] = useState(false); 
const [loading, setLoading] = useState(false); 


useEffect(() => {
    getMetrics();
  
}, [])

useEffect(() => {
    setTimeout(()=>{
        getMetrics();
    }, 30000)
}, [metrics])

const m = metrics[metrics.length - 1]


return  <div className="col-xs-12 col-sm-6 metrics-wrap"> {loading ? <Loader /> : m}</div>

    async function getMetrics(){
        setLoading(true);
       let response =  await fetch('http://localhost:3001/metrics', {
        headers: new Headers({
            method: 'get', 
            "Authorization": `mysecrettoken`
          })
       }); 
        let metric = await response.text();
        console.log(metric);
         if(metric.status != 200) {
            setErr(true)
         }
         const newState =  [metric]
         
         setMetrics(newState);
         setLoading(false);
       
    }
}
