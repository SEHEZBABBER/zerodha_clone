import React from "react";

const topics = [
  {
    title: "Account Opening",
    icon: "fas fa-user-plus",
    links: ["Resident individual", "Minor", "Non Resident Indian (NRI)", "Company, Partnership, HUF and LLP", "Glossary"]
  },
  {
    title: "Your Zerodha Account",
    icon: "fas fa-user",
    links: ["Your Profile", "Account modification", "Client Master Report (CMR) and DP", "Nomination", "Transfer and conversion of securities"]
  },
  {
    title: "Kite",
    icon: "fas fa-chart-line",
    links: ["IPO", "Trading FAQs", "Margin Trading Facility (MTF) and Margins", "Charts and orders", "Alerts and Nudges", "General"]
  },
  {
    title: "Funds",
    icon: "fas fa-wallet",
    links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"]
  },
  {
    title: "Console",
    icon: "fas fa-chart-pie",
    links: ["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"]
  },
  {
    title: "Coin",
    icon: "fas fa-coins",
    links: ["Understanding mutual funds and Coin", "Coin app", "Coin web", "Transactions and reports", "National Pension Scheme (NPS)"]
  }
];

function SupportTopics() {
  return (
    <div className="container mt-4">
      <h4 className="text-center mb-4">To create a ticket, select a relevant topic</h4>
      <div className="row">
        {topics.map((category, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card p-3 border-0">
              <h5 className="card-title">
                <i className={`${category.icon} me-2`}></i> {category.title}
              </h5>
              <ul className="list-unstyled mt-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a className="text-primary text-decoration-none" style={{ cursor: "pointer" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupportTopics;
