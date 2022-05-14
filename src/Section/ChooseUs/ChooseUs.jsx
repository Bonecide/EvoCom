import '../ChooseUs/ChooseUs.scss'

export default function ChooseUs (){

  return (
    <div className="chooseUs">
      <div className='chooseUs_block'>
        <h1 className="chooseUs_title">Почему выбирают нас</h1> 
      </div>
      <div className="container">
        <div className='container_text'>
          <h3 className='container_title'>Мы поставляем</h3>
          <p className='container_description'>
            Оборудование известных мировых <br/> 
            телеком компаний как: Eltek, <br/>
            DeltaSolution, NFWARE, Siklu,<br/>
            RadWin, Cambium, Ceragon,<br/>
            Старлинк и других.
          </p>
        </div>
        <span className='span'></span>
        <div className='container_text'>
          <h3 className='container_title'>Мы осуществляем</h3>
          <p className='container_description'>
          Реализации проектов полного цикла<br/>
          от подключения удаленных<br/> 
          объектов до построения полномасштабных<br/> 
          инфокоммуникационных сетей<br/> 
          корпоративного уровня.
          </p>
        </div>
        <span className='span'></span>
        <div className='container_text'>
          <h3 className='container_title'>Мы предлагаем</h3>
          <p className='container_description'>
          Широкий спектр услуг в области<br/> 
          IT логистики с использованием<br/>
          оптимальной логистической<br/> 
          схемы по доставке и хранению<br/> 
          товара до склада заказчика.
          </p>
        </div>
      </div>
    </div>
  )
}