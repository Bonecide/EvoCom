import './Amenits.scss'
export default function Amenits() {

    return (
        <div id="Amenit">
            <div className="container">
                <h2 className='Amenits_headline'>Наши услуги</h2>
                <div className="Amenits" >
                    
                    <div className="Amenits_first_row">
                      <div className='Amenits_borders_first'>
                        <div className='Amenits_first_row_first_block'>
                                <h3>Дистрибуция продуктов и решений ведущих производителей телекоммуникационной отрасли.</h3>
                                <p>Мы являемся официальными представителем известных мировых телекоммуникационных компаний как: Extreme, DeltaSolution, NFWARE, Siklu, RadWin, Cambium, Ceragon. </p>
                        </div>
                      </div> 
                     <div className='Amenits_borders'>
                        <div className='Amenits_first_row_second_block'>
                                <h3>Выстроенная система логистики. Поставка оборудования.</h3>
                                <p>Компания «Эвоком Сервис», осуществляет продажу и доставку оборудования со склада производителей/партнеров в любую точку стран СНГ до склада заказчика в оптимальные сроки. </p>
                        </div>
                     </div>     
                    </div>
                    <div className="Amenits_second_row">
                       <div className='Amenits_borders_first'>
                        <div className='Amenits_second_row_first_block'>
                                <h3>Экспертиза и Консалтинг.</h3>
                                <p>Опыт реализованных проектов и партнерские статусы у ведущих производителей оборудования позволяют компании «Эвоком Сервис» подбирать новейшие инновационные решения для оптимизации бизнеса заказчика. 
                                    <br /> 
                                Наши высококвалифицированные специалисты проводят аудит ИТ-инфраструктуры заказчика 
                                и предлагают рекомендации на основе постоянного анализа тенденций телекоммуникационного рынка.
                                </p>
                        </div>
                        </div>
                        <div className='Amenits_borders'>
                        <div className='Amenits_second_row_second_block'>
                                <h3>Комплекс услуг по сопровождению проектов.</h3>
                                <p>Компания имеет богатый опыт в реализации 
                                и интеграции технологически сложных проектов, в том числе в территориально
                                распределенных структурах. Все работы проводятся в сжатые сроки, 
                                в удобном для заказчика режиме.</p>
                        </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}