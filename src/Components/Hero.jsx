import React from "react";
import Logo from "../Styles/hero-img.svg"
import { useTranslation } from "react-i18next";
import "../Styles/Hero.scss"

const Hero = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1>
          {t("home.body")} &nbsp;
          <span>{t("home.span")} &nbsp;</span>
          {t("home.body-2")}
        </h1>
      </div>
      <div className="hero-right">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Hero;
