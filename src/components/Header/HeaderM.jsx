
import Delivery from "../../components/images/delivery.png";
import FU from "../../components/images/FU.jpg";
import Search from "../../components/images/search.png";
import Basket from "../../components/images/basket.svg";
import Menu from "../../components/images/menu.png";

import SelectBasicExample from "../Currency/Currency";
import Language from "../Language/Language";

const HeaderM = () => {
  return (
    <div className=" w-80 h-32">
      <nav className=" h-11 bg-[#333333]">
        <section className=" flex h-9 text-white text-xs justify-center pt-2">
            <SelectBasicExample />
          <div className="flex mx-2 ">
            <img className=" w-4 h-3 my-auto mx-2 " src={Delivery} alt="Delivery" />
            <p className=" my-auto">Доставка та оплата</p>
          </div>
          <Language/>
        </section>
      </nav>
      <div className=" flex justify-around h-24">
        <section  className=" flex my-auto">
          <img src={Menu} alt="menu" />
        </section>
        <section className=" flex my-auto">
          <img className="w-[75px] h-[78px]" src={FU} alt="flowers ukraine" />
        </section>
        <section className=" flex my-auto ">
            <img className=" w-[18px] h-[18px] my-auto mr-5" src={Search} alt="search" />
            <img className=" w-6 h-6" src={Basket} alt="Basket" />
        </section>
      </div>
    </div>
  );
};

export default HeaderM;
