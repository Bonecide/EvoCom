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
            <img src={'img/whatsapp.svg'} alt="whatsapp" />
            <img src={'img/insta.svg'} alt="instagram" />
          </div>
          <div className='contact_container'>
            <p className='contact_text'>Отдел продаж: +996 707 702 702</p>
            <p className='contact_text'>Отдел тех. поддержки: +996 707 702 703 </p>
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