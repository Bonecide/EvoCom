import axios from 'axios';
import { useEffect, useState } from 'react'
import '../ChooseUs/ChooseUs.scss'

export default function ChooseUs (){

  const [data , setData] = useState();

  const fetchData = () => {
    axios.get('http://167.99.35.71/choose_us/')
    .then(res => {
      setData(res.data)
    })
  } 

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="chooseUs ">
    {data?
     <div>
        <div className='chooseUs_block container'>
          <h1 className="chooseUs_title">Почему выбирают нас</h1> 
        </div>  
      <div className='block_choose container'>
        <div className="block">
            <div className='block_text'>
              <h3 className='block_title'> {data[1].title}</h3>
              <p className='block_description'>
                {data[1].text}
              </p>
            </div>
            <span className='span'></span>
            <div className='block_text'>
              <h3 className='block_title'>{data[0].title}</h3>
              <p className='block_description'>
                {data[0].text}
              </p>
            </div>
            <span className='span'></span>
            <div className='block_text'>
              <h3 className='block_title'>{data[2].title}</h3>
              <p className='block_description'>
                {data[2].text}
              </p>
            </div>
          </div>
        </div>
     </div> 
     : 'Loading ...' }
    </div>
  )
}