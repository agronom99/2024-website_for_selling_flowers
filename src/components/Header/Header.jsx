import React from "react";
import "./Header.scss";
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
import Currency from "../Currency/Currency";
import Language from "../Language/Language";
import City from "../City/City";
import Menu from "../../components/images/menu.png";
import CatalogList from "../CatalogList/CatalogList";
import { useTranslation } from "react-i18next";

const Header = () => {
  const {t} = useTranslation();

  
  return (
    <div className="header">
      <div className="header-nav flex">
        <div className="article">
          <div className="box-1">
            <p className=" mr-1 sm:mr-2 hidden sm:contents">{t('header.Currency')} </p>
            <Currency />
          </div>
          <div className="box-2">
            <p className=" mr-1 sm:mr-3 hidden sm:contents">{t('header.Language')}</p>
            <Language/>
          </div>
          <div className="box-3">
            <p className="mr-2">{t('header.City')}</p>
            <City />
          </div>
          <div className="box-4">
            <img className=" w-6" src={Bookmarks} alt="entrance" />
            <p className=" mx-2">{t('header.Bookmarks')}</p>
          </div>
          <div className="box-5 flex items-center">
            <span className=" mx-2 sm:hidden">|</span>
            <img
              className=" mx-1 sm:mx-3 w-4 h-3 sm:w-6 sm:h-5"
              src={Delivery}
              alt="Delivery"
            />
            <p className=" text-xs sm:text-base ">{t('header.delivery')}</p>
            <span className=" mx-2 sm:hidden">|</span>
          </div>
          <div className="box-6">
            <img className=" w-5" src={Contacts} alt="Contacts" />
            <p className=" mx-2 ">{t('header.Contacts')}</p>
          </div>
        </div>
        <div className="article-1 flex items-center">
          <div className=" flex ">
            <img className="" src={Entrance} alt="entrance" />
            <p className=" mx-2">{t('header.Log_in')}</p>
          </div>
          <div className="ml-2">| {t('header.Registration')}</div>
        </div>
      </div>
      <div className="wrapper w-[320px] sm:w-auto">
        <div className="box1 m-auto sm:mx-0 sm:justify-end sm:flex">
          <img
            className="w-[75px] h-[78px] sm:w-[117px] sm:h-[120px]"
            src={FU}
            alt="flowers ukraine"
          />
        </div>
        <div className="box2 m-auto sm:mr-56">
          <div className=" flex">
            <div className="hidden sm:flex w-56 sm:border-solid border-b border-[#956D84] text-[#828282]">
              Пошук по категоріям
            </div>
            <div className=" flex ml-5 sm:border-solid sm:border-b border-[#956D84]">
              <input
                className="hidden sm:flex sm:w-[500px]"
                type="text"
                name="Пошук по товарам"
                placeholder="Пошук по товарам"
              />
              <img
                className=" w-[18px] h-[18px] my-auto"
                src={Search}
                alt="search"
              />
            </div>
          </div>
        </div>
        <div className="box3 m-auto">
          <img className=" sm:hidden" src={Menu} alt="menu" />
          <ul className="hidden sm:flex">
            <li className=" text-[#956D84] flex">
              <p>Каталог товарів</p>
              <CatalogList/>
            </li>
            <li className="mx-16">Форум</li>
            <li>Відгуки</li>
            <li className="mx-16">Акції</li>
            <li>Новини</li>
            <li className="mx-16">Інформація</li>
          </ul>
        </div>
        <div className="box4 m-auto sm:m-0 sm:self-end  ">
          <div className=" hidden sm:flex mb-4">
            <img className=" mx-2" src={Vaiber} alt="Vaiber" />
            <img className=" mx-2" src={Insta} alt="Insta" />
            <div className=" mx-2 bg-[#956D84] w-[27px] h-[27px] flex items-center justify-center rounded-[13.5px]">
              <img
                className="w-[14px] h-[14px]"
                src={Telegram}
                alt="Telegram"
              />
            </div>
            <img className=" mx-2" src={Facebook} alt="Facebook" />
          </div>
          <div className="hidden sm:contents text-[#333333]">
            + 38 (067) 000-00-00
          </div>
          <div className=" sm:flex mt-5">
            <img className=" hidden sm:flex" src={Favorites} alt="Favorites" />
            <img
              className="w-6 h-6 mb-5 sm:mb-0 sm:w-10 sm:h-10  sm:ml-5 sm:mr-3 "
              src={Basket}
              alt="Basket"
            />
            <p className="hidden sm:flex sm:my-auto">$1 520</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
