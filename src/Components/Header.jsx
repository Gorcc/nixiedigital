import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Styles/NixieLogo.svg";
import "../Styles/Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [language, setLanguage] = useState("en");
  const [btnAnim,setbtnAnim] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    setbtnAnim(true);
  };

  return (
    <div className="header-container">
      <div className="header-left">
        <img src={Logo} alt="Logo Image" />
      </div>

      <div className="header-middle">
        <ul>
          <li>
            <a href="#">{t("header.home")}</a>
          </li>
          <li>
            <a href="#">{t("header.About")}</a>
          </li>
          <li>
            <a href="#">{t("header.Pricing")}</a>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <button className={btnAnim ? "language-btn btn-anim" : "language-btn"}onClick={handleLanguage}><FontAwesomeIcon icon={faGlobe} /> &nbsp; 
{language}</button>
      </div>
    </div>
  );
};

export default Header;
