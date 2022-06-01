import '../OurServices/Services.scss'

export default function Services(){
  return(
    <div className="services" id='Services'>
      <div className="container">
        <h1 className="title">Наши сервисы</h1>
        <div className="description">
          <div className="services_section">
            <h2 className="services_title">Монтаж оптическихи <br/> медных кабелей</h2>
            <p className="services_description">
               Наши специалисты осуществляют прокладку
               и сварку кабелей волоконно-оптических систем 
               связи, а также классических медных кабелей  
               связи и передачи данных.
            </p>
          </div>
          <div className="services_section">
            <h2 className="services_title">Монтаж структурированных<br/> кабельных систем </h2>
            <p  className="services_description">
               Мы производим профессиональный качественный
               монтаж структурированных кабельных систем.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}