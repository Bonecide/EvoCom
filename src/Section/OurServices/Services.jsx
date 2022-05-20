import '../OurServices/Services.scss'

export default function Services(){
  return(
    <div className="services" id='Services'>
      <div className="container">
        <h1 className="title">Наши сервисы</h1>
        <div className="description">
          <div className="services_section">
            <h2 className="services_title">Монтаж оптических<br/> и медных кабелей</h2>
            <p className="services_description">
               Наши специалисты осуществляют прокладку<br/> 
               и сварку кабелей волоконно-оптических систем <br/>
               связи, а также классических медных кабелей <br/> 
               связи и передачи данных.
            </p>
          </div>
          <div className="services_section">
            <h2 className="services_title">Монтаж структурированных <br/>кабельных систем </h2>
            <p  className="services_description">
               Мы производим профессиональный качественный<br/> 
               монтаж структурированных кабельных систем.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}