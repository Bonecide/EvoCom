import './Header.scss'
import  FakeDatasHeader from '../../fake-data/links.json'

export default function Header() {
    
    return(
        <header className="header">
         <div className="header_container container">
            <div className='header_logo'>
                <a href="#Evocom">
                        <img src={'img/logo.svg'} alt="" />
                </a>
            </div>
            <div className='header_links'>
                {FakeDatasHeader.map((data)=> (
                    <a key={`headerLinks${data.id}`} href={data.link} onClick = {()=> data.inWork? alert('В процессе обновления, будет доступен позже') : null}>
                        {data.label}
                    </a>
                ))}
            </div>
            <div className='header_contact'>
                <div className='header_contacts'>
                    <p className='header_number'>
                        +996 775 990 809
                    </p>
                    <p>
                    global@evocomservice.com
                    </p>
                </div>
                <div className='header_social'>
                    <a target='_blank' rel="noreferrer" href="https://api.whatsapp.com/send/?phone=996775990 809&text=Здравствуйте%2C+у+меня+есть+вопрос">
                        <img src={'img/whatsapp.svg'} alt="whatsapp" />
                    </a>
                    <a href="#">
                    <img style={{cursor: 'pointer'}} onClick={()=> alert('В Разработке')} src={'img/insta.svg'} alt="instagram" />
                    </a>
                </div>
            </div>
         </div>
        </header>
    )
}