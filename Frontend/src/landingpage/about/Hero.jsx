function Hero() {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ marginTop: "5vw" }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ marginBottom: "5vw" }}
      >
        <h1 className="fs-2">
          We pioneered the discount broking model in India.
        </h1>
        <h1 className="fs-2">
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <hr style={{ width: "70vw", marginBottom: "7vw" }} />
      <div
        className="d-flex flex-row justify-content-between align-items-start"
        style={{ width: "60vw" }}
      >
        {/* Ensure both divs take equal width */}
        <div className="d-flex flex-column justify-content-center align-items-start" style={{width:"40%"}}>
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <br />
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <br />
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-start w-50" style={{width:"40%"}}>
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <br />
          <p>
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <br />
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
