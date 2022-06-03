import './AboutUs.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function AboutUs () {
    const [data,setData] = useState()
    const fetchData = () => {
       axios.get('http://167.99.35.71/about_us/')
    .then(res =>{
      setData(res.data)
    })}
    useEffect (()=> {
      fetchData()
    },[])

    return(

        <div className='AboutUs_container' id='AboutUs'>
        {data ? 
            <div className='container'>
               <h2 className='AboutUs_headline'>О нас</h2>
               <div className='AboutUs_text_wrapper'>
                   <div className='AboutUs_text_container'>
                        <p>{data[2].text}</p>
                        <p>{data[1].text}</p>
                   </div>
                   <div className='AboutUs_text_container'>
                        <p>{data[0].text}</p>
                   </div>
               </div>
            </div> 
           : 'Loading...'}  
        </div>
    )
}