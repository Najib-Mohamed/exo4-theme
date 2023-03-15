import Navebare from "./Navebare";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { changerTheme } from "./features/themes/themeSlice";
import { useEffect, useState } from "react";

function App() {
  const themeActuelle = useSelector((state) => state.theme.value);
  const [montheme, setMontheme] = useState();
  useEffect(() => {
    switch (themeActuelle) {
      case "b":
        setMontheme("text-black bg-white");
        break;
      case "n":
        setMontheme("text-white bg-black");
        break;
      case "r":
        setMontheme("text-red-600 bg-black");
        break;
      case "o":
        setMontheme("text-blue-600 bg-orange-400");
        break;
    }
  }, [themeActuelle]);
  return (
    <div className={montheme + " App"} >
      <Navebare />
      <div className="h-screen mt-60 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          labore officia error officiis rem et, earum voluptate nulla tempore,
          molestiae sit neque magnam repellendus suscipit a! Ducimus facere
          similique dolor.
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default App;
