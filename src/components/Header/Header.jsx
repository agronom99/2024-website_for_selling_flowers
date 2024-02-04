import "./heder.scss";
import Entrance from "../../components/images/entrance.svg";
import Contacts from "../../components/images/contacts.png";
import Delivery from "../../components/images/delivery.png";
import Bookmarks from "../../components/images/bookmarks.png";

const Header = () => {
  return (
    <div className="header text-base">
      <nav className=" flex items-center place-content-around">
        <section className=" flex w-[899px] place-content-around">
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
    </div>
  );
};

export default Header;
