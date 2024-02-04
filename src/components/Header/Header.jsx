import "./heder.scss";
import Entrance from '../../components/images/entrance.svg'
 
const Header = () => {
  return (
    <div className="header text-base">
        <nav className=" flex items-center place-content-around">
            <section className=" flex w-[899px] place-content-around" >
              <div>Валюта</div>
              <div>Мова</div>
              <div>Місто</div>
              <div>Закладки</div>
              <div>Доставка та оплата</div>
              <div>Контакти</div>
            </section>
            <section className=" flex w-40 place-content-around">
              <div className=" flex" > 
                <img src={Entrance} alt="entrance" className=" w-4 h-4 mr-2 my-auto"/>
                <p>Вхід</p>
              </div>
              <div>| Реєстрація</div>
            </section>

        </nav>
      
    </div>
  )
}

export default Header
