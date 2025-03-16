function Hero() {
  return (
    <div className = 'container' style={{marginBottom:"7.5vw"}}>
      <div className="row">
        <img src="/media/images/homeHero.png" alt="" className="mb-5"/>
      </div>
      <div className="row text-center fs-3 mt-5 justify-content-center">
        <h1 className="mb-3">Invest in everything</h1>
        <p className="mb-4">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button type="button" className="btn btn-primary p-2 fs-4" style = {{width:"17%"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Hero;
