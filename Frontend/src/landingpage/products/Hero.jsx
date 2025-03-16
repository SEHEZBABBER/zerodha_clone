function Hero() {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column" style={{width:"80vw"}}>
    <div className="row text-center fs-3 mt-5 justify-content-center" style={{marginBottom:"10vw"}}>
      <h1 className="mb-3">Zerodha Products</h1>
      <p className="mb-4">
      Sleek, modern, and intuitive trading platforms
      </p>
      <p>
      Check out our <a href="" style={{textDecoration:"none",fontWeight:"bold",color:"blue"}}>investment offerings →</a>
      </p>
    </div>
    <hr style={{width:"80vw"}}/>
    </div>
  );
}

export default Hero;
