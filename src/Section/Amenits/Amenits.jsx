import axios from 'axios'
import { useEffect, useState } from 'react'
import './Amenits.scss'
export default function Amenits() {

    const [data,setData] = useState()
    const fetchData = () => {
       axios.get('http://167.99.35.71/services/')
    .then(res =>{
      setData(res.data)
    })}
    useEffect (()=> {
      fetchData()
    },[])
    return (
    
        <div id="Amenit">
            {data ? 
            <div className="container">
                <h2 className='Amenits_headline'>Наши услуги</h2>
                <div className="Amenits" >
                    
                    <div className="Amenits_first_row">
                      <div className='Amenits_borders_first'>
                        <div className='Amenits_first_row_first_block'>
                                <h3>{data[2].title}</h3>
                                <p>{data[2].text}</p>
                        </div>
                      </div> 
                     <div className='Amenits_borders'>
                        <div className='Amenits_first_row_second_block'>
                                <h3>{data[0].title}</h3>
                                <p>{data[0].text}</p>
                        </div>
                     </div>     
                    </div>
                    <div className="Amenits_second_row">
                       <div className='Amenits_borders_first'>
                        <div className='Amenits_second_row_first_block'>
                                <h3>{data[3].title}</h3>
                                <p>{data[3].text}
                                </p>
                        </div>
                        </div>
                        <div className='Amenits_borders'>
                        <div className='Amenits_second_row_second_block'>
                                <h3>{data[1].title}.</h3>
                                <p>{data[1].text}</p>
                        </div>
                        </div> 
                    </div>
                </div>
            </div>
            :
            'Loading....'
            }
        </div>
    )
}