import React from "react";

function Hero() {
  return (
    <div style={{ backgroundColor: "#2f75bb", color: "white", padding: "40px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h2>Support Portal</h2>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          Search for an answer or browse help topics to create a ticket
        </p>

        {/* Search Box */}
        <div style={{ position: "relative", maxWidth: "500px", margin: "0 auto" }}>
          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "5px",
              border: "none",
              fontSize: "16px"
            }}
          />
          <button
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#555",
              fontSize: "18px"
            }}
          >
            🔍
          </button>
        </div>

        {/* Links */}
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
          {["Track account opening", "Track segment activation", "Intraday margins", "Kite user manual"].map(
            (link, index) => (
              <a key={index} style={{ color: "white", textDecoration: "underline", cursor: "pointer" }}>
                {link}
              </a>
            )
          )}
        </div>

        {/* Right Section - Featured */}
        <div style={{ marginTop: "30px", textAlign: "left" }}>
          <h4>Featured</h4>
          <ol>
            <li>
              <a style={{ color: "white", textDecoration: "underline", cursor: "pointer" }}>
                MCX Crude option contract expiry - March 2025
              </a>
            </li>
            <li>
              <a style={{ color: "white", textDecoration: "underline", cursor: "pointer" }}>
                Current Takeovers and Delisting – March 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
