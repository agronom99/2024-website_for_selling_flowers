import "./heder.scss";
import Entrance from "../../components/images/entrance.svg";
import Contacts from "../../components/images/contacts.png";
import Delivery from "../../components/images/delivery.png";
import Bookmarks from "../../components/images/bookmarks.png";
import FU from "../../components/images/FU.jpg";
import Search from "../../components/images/search.png";
import Favorites from "../../components/images/favorites.svg";
import Basket from "../../components/images/basket.svg";
import Vaiber from "../../components/images/vaiber.svg";
import Insta from "../../components/images/insta.svg";
import Fon from "../../components/images/telegram 0.svg";
import Telegram from "../../components/images/telegram (3) 1.svg";
import Facebook from "../../components/images/facebook.svg";

const Header = () => {
  return (
    <div className="header text-base">
      <nav className=" flex items-center place-content-around">
        <section className=" flex w-[1115px] place-content-around">
          <div>Валюта</div>
          <div>Мова</div>
          <div>Місто</div>
          <div></div>
          <div className=" flex">
            <img
              src={Bookmarks}
              alt="entrance"
              className=" w-4 h-4 mr-5 my-auto"
            />
            <p>Закладки</p>
          </div>
          <div className=" flex">
            <img
              src={Delivery}
              alt="entrance"
              className=" w-5 h-4 mr-2.5 my-auto"
            />
            <p>Доставка та оплата</p>
          </div>
          <div className=" flex">
            <img
              src={Contacts}
              alt="entrance"
              className=" w-4 h-4 mr-2.5 my-auto"
            />
            <p>Контакти</p>
          </div>
        </section>
        <section className=" flex w-44 place-content-around">
          <div className=" flex">
            <img
              src={Entrance}
              alt="entrance"
              className=" w-4 h-4 mr-2.5 my-auto"
            />
            <p>Увійти</p>
          </div>
          <div>| Реєстрація</div>
        </section>
      </nav>
      <div className=" flex  h-3/4">
        <section className=" w-2/12 flex items-end">
          <img className=" ml-auto " src={FU} alt="flowers ukraine" />
        </section>
        <section className="w-6/12 flex flex-col justify-end ">
          <div className=" flex justify-around ">
            <div className="w-56 border-tolid border-b border-[#956D84]  text-[#828282]">
              Пошук по категоріям
            </div>
            <div className=" flex w-[520px] justify-between border-tolid border-b border-[#956D84] text-[#828282]">
              <input type="text" value="Пошук по товарам" />
              <img className="w-[18px] h-[18px]" src={Search} alt="search" />
            </div>
          </div>
          <ul className=" flex justify-around mt-12 ">
            <li className=" text-[#956D84]">Каталог товарів</li>
            <li>Форум</li>
            <li>Відгуки</li>
            <li>Акції</li>
            <li>Новини</li>
            <li>Інформація</li>
          </ul>
        </section>
        <section className=" w-4/12 flex flex-col items-center justify-end">
          <div className=" flex items-center justify-between w-36">
            <img src={Vaiber} alt="Vaiber" />
            <img src={Insta} alt="Insta" />
            <div className=" bg-[#956D84] w-[27px] h-[27px] flex items-center justify-center rounded-[13.5px]">
              <img className="w-[14px] h-[14px]" src={Telegram} alt="Telegram" />
            </div>
            <img src={Facebook} alt="Facebook" />
          </div>
          <div className=" text-[#333333] mt-5">+ 38 (067) 000-00-00</div>
          <div className=" flex items-center w-40 justify-between mt-5">
            <img src={Favorites} alt="Favorites" />
            <img src={Basket} alt="Basket" />
            <p>$1 520</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
