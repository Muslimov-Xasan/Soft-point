import Apple from "../../assets/imgs/apple.png";
import Avast from "../../assets/imgs/Avast-2.png";
import Ebay from "../../assets/imgs/Ebay-3.png";
import Footer from "../../assets/imgs/Google-1.png";
import Google from "../../assets/imgs/google.png";
import Mobile from "../../assets/imgs/image.png";
import Laptop from "../../assets/imgs/laptop.png";
import Paypal from "../../assets/imgs/Paypal-4.png";
import "./Hero.scss";

// Lang
import Localization from "../../Localization/Localization";
import useLang from "./../../Hook/useLang";
import { useRef } from "react";

function Hero() {
  const inputRef = useRef(null);
  const [lang] = useLang();

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <div className="container">
        <div className="hero">
          <div className="hero__left">
            <h1 className="hero__head">{Localization[lang].hero.titleHero1}</h1>
            <p className="hero__text">{Localization[lang].hero.titleHero2}</p>
            <div className="hero__wrap">
              <input
                ref={inputRef}
                className="hero__input"
                type="email"
                autocomplete={"off"}
                placeholder={Localization[lang].hero.titleHero3}
              />
              <button className="hero__btn" onClick={handleClick}>
                {Localization[lang].hero.titleHero4}
              </button>
            </div>
            <div className="hero__imgs">
              <img className="hero__img1" src={Apple} width={120} alt="apple" />
              <img
                className="hero__img2"
                src={Google}
                width={120}
                alt="google"
              />
            </div>
          </div>
          <div className="hero__right">
            <img className="hero__img--right2" src={Mobile} alt="" />
            <img className="hero__img--right" src={Laptop} width={850} alt="" />
          </div>
        </div>
        <div className="hero__footer">
          <img className="hero__footer--img1" src={Footer} alt="" />
          <img className="hero__footer--img2" src={Avast} alt="" />
          <img className="hero__footer--img3" src={Ebay} alt="" />
          <img className="hero__footer--img4" src={Paypal} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
