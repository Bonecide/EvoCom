import PurpleButton from '../../Components/Buttons/PurpleButton'
import './Evocom.scss'
export default function Evocom(){


    return(

        <div className="Evocom" id='Evocom'>
            <div className='Evocom_container container'>
                <div className='Evocom_text'>
                    <h1>
                    Эвоком Сервис 
                    <br />
                    Телеком решения и услуги
                    </h1>
                    <p>IT решения любой сложности  </p>
                    <PurpleButton link='http://google.com'>Обратный звонок</PurpleButton>
                </div>
            </div>
        </div>
    )
}