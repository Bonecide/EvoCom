import './Header.scss'
export default function Header() {

    const FakeDatasHeader = [
        {
        id : 1,
        label : 'О нас',
         link : '#AboutUs'
        },
       
        {
         id : 2,
         label : 'Сервисы' ,
         link : '#Services'
        },
        {
         id : 3,
         label : 'Услуги' ,
         link : '#Amenit'
        },
        {
         id : 4,
         label : 'Каталог' ,
         link : '#Catalog'
         },
    
    ]
    return(
        <header className="header">
         <div className="header_container container">
            <div className='header_logo'>
                <a href="#">
                    <img src={'img/logo.svg'} alt="" />
                </a>
            </div>
            <div className='header_links'>
                {FakeDatasHeader.map((data)=> (
                    <a key={`headerLinks${data.id}`} href={data.link}>
                        {data.label}
                    </a>
                ))}
            </div>
            <div className='header_contact'>
                <div className='header_contacts'>
                    <p>
                        +996 777 888 999
                    </p>
                    <p>
                    global@evocomservice.com
                    </p>
                </div>
                <div className='header_social'>
                    <img src={'img/whatsapp.svg'} alt="whatsapp" />
                    <img src={'img/insta.svg'} alt="instagram" />
                </div>
            </div>
         </div>
        </header>
       
    )
}