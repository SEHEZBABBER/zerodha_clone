function Education() {
    return ( 
        <div className="container d-flex flex-row justify-content-center align-item-center" style={{width:"75vw",marginTop:"15vw"}}>
            <div className="col-6">
                <img src="media/images/education.svg" style={{width:"65%"}}/>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center align-item-center">
                <h1>Free and open market education</h1>
                <br />
                <p className="fs-5">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="/" style={{textDecoration:"none"}} className="fs-5">Varcity <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <br />
                <p className="fs-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="/" style={{textDecoration:"none"}} className="fs-5">Trending Q&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <br />
            </div>
        </div>
     );
}

export default Education;