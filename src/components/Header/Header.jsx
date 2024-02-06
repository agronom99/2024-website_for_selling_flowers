import "./header.scss";
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
import Telegram from "../../components/images/telegram (3) 1.svg";
import Facebook from "../../components/images/facebook.svg";
import SelectBasicExample from "../Currency/Currency";
import Language from "../Language/Language";

const Header = () => {
  return (
    <div className="header">
      <nav className="header-nav">
        <section className="header-nav-selector-1">
          <div className="selector-1-currency flex">
            <span className=" mr-3">Валюта</span>
            <SelectBasicExample />
          </div>
          <div className="selector-1-language flex"><span className=" mr-3">Мова</span><Language/></div>
          <div className="selector-1-city">Місто</div>
          <div className="selector-1-bookmarks flex ">
            <img src={Bookmarks} alt="entrance" />
            <p className=" my-auto">Закладки</p>
          </div>
          <div className="selector-1-delivery flex">
            <img src={Delivery} alt="Delivery" />
            <p className=" my-auto">Доставка та оплата</p>
          </div>
          <div className="selector-1-contacts flex">
            <img src={Contacts} alt="Contacts" />
            <p className=" my-auto">Контакти</p>
          </div>
        </section>
        <section className="header-nav-selector-2 ">
          <div className=" flex ">
            <img src={Entrance} alt="entrance" />
            <p className=" my-auto">Увійти</p>
          </div>
          <div className="ml-2">| Реєстрація</div>
        </section>
      </nav>
      <div className="header-body">
        <section className="header-body-img ">
          <img className="w-[117px] h-[120px]" src={FU} alt="flowers ukraine" />
        </section>
        <section className="header-body-1 ">
          <div className="search">
            <div className="search-1">Пошук по категоріям</div>
            <div className="search-2">
              <input
                type="text"
                name="Пошук по товарам"
                placeholder="Пошук по товарам"
              />
              <img className=" w-[18px] h-[18px]" src={Search} alt="search" />
            </div>
          </div>
          <ul className="search-ul">
            <li className=" text-[#956D84]">Каталог товарів</li>
            <li>Форум</li>
            <li>Відгуки</li>
            <li>Акції</li>
            <li>Новини</li>
            <li>Інформація</li>
          </ul>
        </section>
        <section className="header-body-2">
          <div className="icon">
            <img src={Vaiber} alt="Vaiber" />
            <img src={Insta} alt="Insta" />
            <div className=" bg-[#956D84] w-[27px] h-[27px] flex items-center justify-center rounded-[13.5px]">
              <img
                className="w-[14px] h-[14px]"
                src={Telegram}
                alt="Telegram"
              />
            </div>
            <img src={Facebook} alt="Facebook" />
          </div>
          <div className=" text-[#333333] mt-4">+ 38 (067) 000-00-00</div>
          <div className="icon-sum">
            <img src={Favorites} alt="Favorites" />
            <img src={Basket} alt="Basket" />
            <p >$1 520</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
