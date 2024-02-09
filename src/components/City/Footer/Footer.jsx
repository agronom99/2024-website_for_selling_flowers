import React from "react";
import "./Footer.scss";
import FUf from "../../images/FUf.png";
import { GoChevronRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="footer">
      <div className="article-f">
        <div className="box-f-1 flex-col flex sm:flex-row sm:flex  sm:border-solid border-b border-[rgb(149 109 132 )]">
          <img
            className="ml-[106px] sm:ml-[251px] mt-[38px] sm:mt-[32px] w-[124px] h-[125px] sm:w-[167px] sm:h-[170px]"
            src={FUf}
            alt="FU"
          />
          <div className="mx-5 sm:ml-[188px] mt-[66px] sm:mt-[42px] flex flex-col sm:flex-row uppercase">
            <div className=" sm:w-56 ">
              <div className=" flex items-center justify-between font-black">
                <p>Інформація</p>
                <div className=" w-2 h-3 sm:hidden">
                  <GoChevronRight className=" w-4 h-4" />
                </div>
              </div>
              <div className=" hidden sm:flex sm:flex-col sm:mt-7">
                <p>О НАС</p>
                <p className="my-2">ДОСТАВКА И ОПЛАТА</p>
                <p>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
              </div>
            </div>
            <div className=" sm:w-52 mt-6 sm:mt-0 sm:ml-[93px] ">
              <div className=" flex items-center justify-between font-black">
                <p>СЛУЖБА ПОДДЕРЖКИ</p>
                <div className=" w-2 h-3 sm:hidden">
                  <GoChevronRight className=" w-4 h-4" />
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:mt-7">
                <p>КАРТА САЙТА</p>
                <p className="my-2">ВОЗВРАТ ТОВАРА</p>
                <p>СВЯЗАТЬСЯ С НАМИ</p>
                <p className=" mt-2">ДЛЯ СОТРУДНИЧЕСТВА</p>
              </div>
            </div>
            <div className="sm:ml-[92px] sm:w-44 mt-6 sm:mt-0">
                <div className=" flex items-center justify-between font-black">
                <p>ЛИЧНЫЙ КАБИНЕТ</p>
                <div className=" w-2 h-3 sm:hidden">
                  <GoChevronRight className=" w-4 h-4" />
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:mt-7">
                <p>ЛИЧНЫЙ КАБИНЕТ</p>
                <p className="my-2">ИСТОРИЯ ЗАКАЗА</p>
                <p>ЗАКЛАДКИ</p>
                <p className=" mt-2">СПИСОК НОВОСТЕЙ</p>
              </div>
            </div>
            <div className=" mt-6 sm:mt-0 sm:ml-[93px] sm:w-44"> <div className=" flex items-center justify-between font-black">
                <p>ДОПОЛНИТЕЛЬНО</p>
                <div className=" w-2 h-3 sm:hidden">
                  <GoChevronRight className=" w-4 h-4" />
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:mt-7">
                <p>ПОДАРОЧНЫЕ </p>
                <p className="my-2">СЕРТИФИКАТЫ</p>
                <p>АКЦИИ</p>
                <p className=" mt-2">ЦВЕТЫ В ОФИС</p>
              </div></div>
          </div>
        </div>
        <div className="box-f-2">2</div>
        <div className="box-f-3">3</div>
      </div>
    </div>
  );
};

export default Footer;
