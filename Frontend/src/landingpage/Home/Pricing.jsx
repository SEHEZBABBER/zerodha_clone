function Pricing() {
  return (
    <div
      className="container d-flex justify-content-between align-item-center"
      style={{ width: "90vw", marginTop: "15vw" }}
    >
      <div className="col-6" style={{ width: "30%" }}>
        <h4>Unbeatable Price</h4>
        <p>
          we pioneed the concept of discount booking and price transaparency in
          india . FLat fees and no hidden charges
        </p>
        <a href="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
          See More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
      <div className="col-6 d-flex flex-row">
        <div
          className="col-3 border p-3 d-flex flex-column justify-content-center align-item-center text-center"
          style={{ width: "22vw" }}
        >
          <h1>₹0</h1>
          <p>Free equity delivery and direct mutual funds</p>
        </div>
        <div
          className="col-3 border p-3 d-flex flex-column justify-content-center align-item-center text-center"
          style={{ width: "22vw" }}
        >
          <h1>₹20</h1>
          <p>For derivatives and options</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
