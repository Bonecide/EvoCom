import axios from "axios";
import { useForm } from "react-hook-form";
import Map from "../../Components/Map/Map"
import '../Contact/Contact.scss';

export default function Contact (){

  const {
    register,
    formState:{errors},
    handleSubmit,
    reset
  } = useForm({
    mode:"onSubmit"
  })

  const onSubmit = (data) => {
    axios({
      method:'post',
      url:"http://167.99.35.71/contacts/",
      data
    })
    reset();
  } 

  return (
    <div className="Contact" id="Contact">
      <div className=" container">
        <h1 className="title-section">Контакты</h1>
        <div className="contact-block">
          <div className="info">
            <p className="info_title">Оставьте данные для обратной связи</p>
            <form className="info_block" onSubmit={handleSubmit(onSubmit)}>
                <input className="info_input" 
                type="text" 
                {...register ("name", {
                  required:"Поле обязательно к заполнению"
                })}
                placeholder="ФИО"/>
                <div className="error">
                  {errors?.name && <p className="error_text">{errors?.name?.message || "Error"}</p>}
                </div>
                <input className="info_input" 
                type="text" 
                {...register ("phone", {
                  required:"Поле обязательно к заполнению"
                })}
                placeholder="Контактый телефон"/>
                <div className="error">
                  {errors?.phone && <p className="error_text">{errors?.phone?.message || "Error"}</p>}
                </div>

                <input className="info_input" 
                type="email"
                {...register ("email", {
                  required:"Поле обязательно к заполнению"
                })}
                placeholder="E-mail"/>
                <div className="error">
                  {errors?.email && <p className="error_text">{errors?.email?.message || "Error"}</p>}
                </div>
                <input type="submit" className="PurpleButton"/>
             </form>
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