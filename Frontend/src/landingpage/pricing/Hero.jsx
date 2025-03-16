import React from "react";

const chargesData = [
    {
        image: "media/images/pricingMF.svg",
        price: "₹0",
        title: "Free equity delivery",
        description: "All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage."
    },
    {
        image: "media/images/intradayTrades.svg",
        price: "₹20",
        title: "Intraday and F&O trades",
        description: "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
    },
    {
        image: "media/images/pricingMF.svg",
        price: "₹0",
        title: "Free direct MF",
        description: "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges."
    }
];

function ChargesSection() {
    return (
        <div className="container text-center my-5">
            <h2>Charges</h2>
            <p className="text-muted">List of all charges and taxes</p>
            <div className="row d-flex justify-content-center">
                {chargesData.map((item, index) => (
                    <div key={index} className="col-md-4 text-center">
                        <img src={item.image} alt={item.title} className="img-fluid my-3" style={{ maxWidth: "100px" }} />
                        <h5>{item.title}</h5>
                        <p className="text-muted">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChargesSection;
