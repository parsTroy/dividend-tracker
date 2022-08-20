import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.rights}>
        <p>The data returned by Investation is for information and educational purposes only. Before making investment decisions, you should consider risk, timeframe, investment objectives, diversification, and a company’s financial health. The information from our site is not a recommendation to buy or sell a security. All investors should consult a qualified professional before trading in any security. Stock and option trading involves risk and is not suitable for all investors.</p>
        <p>Investation. © 2022</p>
      </div>
    </div>
  );
};

export default Footer;
