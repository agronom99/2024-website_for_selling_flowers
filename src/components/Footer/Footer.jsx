import React from "react";
import "./Footer.scss";
import FUf from "../../components/images/FUf.png";
import Kmaster from "../../components/images/Kmaster.png";
import Kmaestro from "../../components/images/Kmaestro.png";
import Kelectron from "../../components/images/Kelectron.png";
import Kvisa from "../../components/images/Kvisa.png";
import Kprivat from "../../components/images/Kprivat.png";
import Kliqpai from "../../components/images/Kliqpai.png";
import BlumNL from "../../components/images/blum-n-l.svg";
import BlumNR from "../../components/images/blum-n-r.svg";
import { useTranslation } from "react-i18next";



import { GoChevronRight } from "react-icons/go";

const Footer = () => {
  const {t} = useTranslation();

  return (
    <div className="footer">
      <div className=" hidden sm:flex sm:absolute">
          <img className="mr-[1400px] mb-20" src={BlumNL} alt="BlumNL" />
          <img className="" src={BlumNR} alt="BlumNL" />
      </div>
      <div className="article-f">
        <div className="box-f-1 flex-col flex sm:flex-row sm:flex  border-none sm:mx-[250px]  sm:border-solid border-b border-[#956D84] ">
          <img
            className="ml-[106px] sm:ml-[0px] mt-[38px] sm:mt-[32px] w-[124px] h-[125px] sm:w-[167px] sm:h-[170px]"
            src={FUf}
            alt="FU"
          />
          <div className="mx-5 sm:ml-[188px] mt-[66px] sm:mt-[42px] flex flex-col sm:flex-row uppercase">
            <div className=" sm:w-56 ">
              <div className=" flex items-center justify-between font-black">
                <p>{t('footer.Information')}</p>
                <div className=" w-2 h-3 sm:hidden">
                  <GoChevronRight className=" w-4 h-4" />
                </div>
              </div>
              <div className=" hidden sm:flex sm:flex-col sm:mt-7">
                <p>ПРО НАС</p>
                <p className="my-2">ДОСТАВКА І ОПЛАТА</p>
                <p>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</p>
              </div>
            </div>
            <div className=" sm:w-52 mt-6 sm:mt-0 sm:ml-[93px] ">
              <div className=" flex items-center justify-between font-black">
                <p>СЛУЖБА ПІДТРИМКИ</p>
                <div className=" w-2 h-3 sm:hidden">
                  <GoChevronRight className=" w-4 h-4" />
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:mt-7">
                <p>КАРТА САЙТА</p>
                <p className="my-2">ПОВЕРНЕННЯ ТОВАРУ</p>
                <p>ЗВ'ЯЗАТИСЯ З НАМИ</p>
                <p className=" mt-2">Для співпраці</p>
              </div>
            </div>
            <div className="sm:ml-[92px] sm:w-44 mt-6 sm:mt-0">
              <div className=" flex items-center justify-between font-black">
                <p>ОСОБИСТИЙ КАБІНЕТ</p>
                <div className=" w-2 h-3 sm:hidden">
                  <GoChevronRight className=" w-4 h-4" />
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:mt-7">
                <p>ОСОБИСТИЙ КАБІНЕТ</p>
                <p className="my-2">Історія замовлень</p>
                <p>ЗАКЛАДКИ</p>
                <p className=" mt-2">Список новин</p>
              </div>
            </div>
            <div className=" mt-6 sm:mt-0 sm:ml-[93px] sm:w-44">
              {" "}
              <div className=" flex items-center justify-between font-black">
                <p>Додатково</p>
                <div className=" w-2 h-3 sm:hidden">
                  <GoChevronRight className=" w-4 h-4" />
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:mt-7">
                <p>Подарунок </p>
                <p className="my-2">Сертифікати</p>
                <p>АКЦИИ</p>
                <p className=" mt-2">Квіти до офісу</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box-f-2 flex flex-wrap mx-4 sm:justify-end sm:mr-64 sm:mt-4">
          <p className=" hidden sm:flex mt-4 mr-5">Способи оплати:</p>
          <img className=" w-20 h-12" src={Kmaster} alt="master" />
          <img className=" w-20 h-12 mx-6" src={Kmaestro} alt="maestro" />
          <img className=" w-20 h-12" src={Kelectron} alt="electron" />
          <img
            className=" w-16 h-12 my-auto sm:my-0 sm:ml-7"
            src={Kvisa}
            alt="visa"
          />
          <img
            className=" w-12 h-12 my-auto mx-12 sm:my-0"
            src={Kprivat}
            alt="privat"
          />
          <img
            className=" w-20 h-4 my-auto sm:mt-4"
            src={Kliqpai}
            alt="liqpai"
          />
        </div>
        <div className="box-f-3 ml-5 sm:ml-64 sm:mt-6 mt-14">
          <p>Copyright © 2024. Всі права захищені</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
