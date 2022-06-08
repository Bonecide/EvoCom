import '../Footer/Footer.scss'
import FakeDataFooter from '../../fake-data/links.json'

export default function Footer (){

  return (
    <footer className="footer">
      <div className='footer_container'>
        <div className='block_logo'>
          <a href="#Evocom">
            <img className="logo" src={'img/logo.svg'} alt="EvoCom" />
          </a>
        </div>
        <div className='links_container'>
            {FakeDataFooter.map((links) => (
              <a className='links' key={links.id} href={links.link} onClick = {()=> links.inWork ? alert('В процессе обновления, будет доступен позже') : null}>
                {links.label} 
              </a>
            ))}
        </div>
        <div className='contact'>
          <div className='contact_logo'>
          <a target='_blank' rel="noreferrer" href="https://api.whatsapp.com/send/?phone=996775990 809&text=Здравствуйте%2C+у+меня+есть+вопрос">
            <img src={'img/whatsapp.svg'} alt="whatsapp" />
          </a>  
          <a href="#">
            <img style={{cursor: 'pointer'}} onClick={()=> alert('В Разработке')} src={'img/insta.svg'} alt="instagram" />
          </a> 
          </div>
          <div className='contact_container'>
            <p className='contact_text'>Отдел продаж: +996 775 990 809</p>
            <p className='contact_text'>Отдел тех. поддержки: +996 555 212 315 </p>
            <p className='contact_text'>E-mail: global@evocomservice.com</p>
          </div>
          <div className='contact_year'>
            <img src={'img/Frame 12.svg'} alt="2022"/>
          </div>
        </div>
      </div>
    </footer>
  )
}