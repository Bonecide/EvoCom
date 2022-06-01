import '../ChooseUs/ChooseUs.scss'

export default function ChooseUs (){

  return (
    <div className="chooseUs container">
      <div className='chooseUs_block'>
        <h1 className="chooseUs_title">Почему выбирают нас</h1> 
      </div>  
     <div className='block_choose'>
      <div className="block">
          <div className='block_text'>
            <h3 className='block_title'>Мы поставляем</h3>
            <p className='block_description'>
              Оборудование известных мировых 
              телеком компаний как: Eltek, 
              DeltaSolution, NFWARE, Siklu,
              RadWin, Cambium, Ceragon,
              Старлинк и других.
            </p>
          </div>
          <span className='span'></span>
          <div className='block_text'>
            <h3 className='block_title'>Мы осуществляем</h3>
            <p className='block_description'>
            Реализации проектов полного цикла
            от подключения удаленных
            объектов до построения полномасштабных 
            инфокоммуникационных сетей
            корпоративного уровня.
            </p>
          </div>
          <span className='span'></span>
          <div className='block_text'>
            <h3 className='block_title'>Мы предлагаем</h3>
            <p className='block_description'>
            Широкий спектр услуг в области 
            IT логистики с использованием
            оптимальной логистической
            схемы по доставке и хранению
            товара до склада заказчика.
            </p>
          </div>
        </div>
     </div> 
    </div>
  )
}