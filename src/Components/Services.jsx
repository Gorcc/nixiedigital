import React from "react";
import "../Styles/Services.scss";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="services-container">
      <div className="cards-nx">
        <div className="card-nx">
          <FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon>
          <h4>{t("services.card-1")}</h4>
          <p>{t("services.card-1-p")}</p>
        </div>
        <div className="card-nx">
          <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
          <h4>{t("services.card-2")}</h4>
          <p>{t("services.card-2-p")}</p>
        </div>
        <div className="card-nx">
        <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
        <h4>{t("services.card-3")}</h4>
          <p>{t("services.card-3-p")}</p>
        </div>
        <div className="card-nx">
          <FontAwesomeIcon icon={faShareSquare}></FontAwesomeIcon>
          <h4>{t("services.card-4")}</h4>
          <p>{t("services.card-4-p")}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
