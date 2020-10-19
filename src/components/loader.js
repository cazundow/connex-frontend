import React from 'react'
import loading from '../assets/loading.gif' 
import './css/loader.css'

export default function loader() {
    return (
        <div className="loader-wrap">
            <img src={loading}></img>
        </div>
    )
}
