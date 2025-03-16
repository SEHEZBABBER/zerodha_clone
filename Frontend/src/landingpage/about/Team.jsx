function Team() {
    return ( 
        <div className="container">
        <div className="container d-flex justify-content-center align-items-center" style={{width:"100vw",marginBottom:"10vw"}}>
            <h1>People</h1>
        </div>
        <div className="container d-flex justify-content-center align-items-start flex-row">
            <div className="img_div d-flex justify-content-center align-items-center flex-column" style={{width:"40%"}}>
                <img src="\media\images\nithinKamath.jpg" alt="ceo_img" className="rounded-circle" style={{width:"60%"}}/>
                <h3>Nithin Kamath</h3>
                <p>Founder, CEO</p>
            </div>
            <div className="container d-flex justify-content-center align-items-start flex-column m-0" style={{width:"40%"}}>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
            </div>
        </div>
        </div>
     );
}

export default Team;