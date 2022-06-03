import PurpleButton from "../../Components/Buttons/PurpleButton";
import Map from "../../Components/Map/Map"
import '../Contact/Contact.scss';

export default function Contact (){

  return (
    <div className="Contact">
      <div className=" container">
        <h1 className="title-section">Контакты</h1>
        <div className="contact-block">
          <div className="info">
            <p className="info_title">Оставьте данные для обратной связи</p>
            <div className="info_block">
              <input className="info_input" type="text" placeholder="ФИО"/>
              <input className="info_input" type="text" placeholder="Контактый телефон"/>
              <input className="info_input" type="text" placeholder="E-mail"/>
              <PurpleButton>Отправить</PurpleButton>
            </div>
          </div>
          <div className="address">
            <Map/>
            <p className="address_text">Адрес: ул. Байтик Баатыра 25</p>
          </div>
        </div>
      </div>
    </div>
  )
}