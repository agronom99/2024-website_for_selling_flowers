
import CardMap from "./components/CardMap/CardMap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useTranslation } from "react-i18next";

function App() {
  const {t} = useTranslation();

  return (
    <div>
    <Header/>
    <CardMap />
    <Footer/>
    </div>
  );
}

export default App;
