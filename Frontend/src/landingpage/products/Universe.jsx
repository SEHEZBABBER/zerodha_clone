import React from "react";

const partners = [
  {
    name: "Zerodha Fund House",
    image: "/media/images/zerodhaFundhouse.png",
    description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    name: "Sensibull",
    image: "media/images/sensibullLogo.svg",
    description:
      "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
  },
  {
    name: "Tijori",
    image: "media/images/tijori.svg", // No image found in your assets
    description:
      "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
  },
  {
    name: "Streak",
    image: "/media/images/streakLogo.png",
    description:
      "Systematic trading platform that allows you to create and backtest strategies without coding.",
  },
  {
    name: "Smallcase",
    image: "/media/images/smallcaseLogo.png",
    description:
      "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
  },
  {
    name: "Ditto",
    image: "/media/images/dittoLogo.png",
    description:
      "Personalized advice on life and health insurance. No spam and no mis-selling.",
  },
];

function Universe() {
  return (
    <div className="container text-center my-5">
      <h2 className="fw-bold">The Zerodha Universe</h2>
      <p className="text-muted">
        Extend your trading and investment experience even further with our partner platforms
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {partners.map((partner, index) => (
          <div key={index} className="col d-flex flex-column align-items-center text-center">
            {partner.image && (
              <img src={partner.image} alt={partner.name} style={{ height: "50px" }} />
            )}
            <h5 className="fw-bold mt-3">{partner.name}</h5>
            <p className="text-muted" style={{ maxWidth: "300px" }}>{partner.description}</p>
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-4">Sign up for free</button>
    </div>
  );
}

export default Universe
