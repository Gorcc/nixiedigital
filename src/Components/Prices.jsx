import React from "react";
import "../Styles/Prices.scss";

const Prices = () => {
  return (
    <div className="prices-container">
      <div className="price-card">
        <h2>Basic</h2>
        <p className="most-popular">Most Popular</p>
        <p>For small buisnesses</p>
        <div className="price-tag">
          $160<span>/one time payment</span>
        </div>
       <hr />
        <h2>Standout features</h2>
        <div className="features">
         
          <p><span>✔</span> Includes Web Design</p>
          <p><span>✔</span> Fully responsive</p>
          <p><span>✔</span> SEO</p>
          <p><span>✔</span> Unlimited Revisions</p>
          <p><span>✔</span> 5 Social Media Posts</p>
          <p><span>✔</span> One Time Payment</p>
          <p><span>✔</span> 5 Pages</p>
        </div>
      </div>
      <div className="price-card">
        <h2>PRO+</h2>
        <p>For professional buisnesses</p>
        <div className="price-tag">
          Contact Us
        </div>
       <hr />
        <h2>Standout features</h2>
        <div className="features">
         
          <p><span>✔</span> Includes Web Design</p>
          <p><span>✔</span> Fully responsive</p>
          <p><span>✔</span> SEO</p>
          <p><span>✔</span> Unlimited Revisions</p>
          <p><span>✔</span> 15+ Social Media Posts</p>
          <p><span>✔</span> One Time Payment</p>
          <p><span>✔</span> 15+ Pages</p>
        </div>
      </div>
    </div>
  );
};

export default Prices;
