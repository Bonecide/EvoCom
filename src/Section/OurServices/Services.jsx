import axios from 'axios';
import { useEffect, useState } from 'react'
import '../OurServices/Services.scss'

export default function Services(){

  const [data , setData] = useState();

  const fetchData =()=>{
    axios.get('http://167.99.35.71/our_services/')
    .then(res => {
      setData(res.data)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])

  return(
    <div className="services" id='Services'>
      {data?
      <div className="container">
        <h1 className="title">Наши сервисы</h1>
        <div className="description">
          <div className="services_section">
            <h2 className="services_title">{data[0].title}</h2>
            <p className="services_description">
              {data[0].text}
            </p>
          </div>
          <div className="services_section">
            <h2 className="services_title">{data[1].title}</h2>
            <p  className="services_description">
              {data[1].text}
            </p>
          </div>
        </div>
      </div>
      : 'Loading...'}
    </div>
  )
}