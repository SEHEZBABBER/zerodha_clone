function Subpara({heading,sub_text}){
    return (
        <>
            <h5>{heading}</h5>
            <p>{sub_text}</p>
            <br />
        </>
    );
}
function Stats() {
    let data = [
        {"heading":"Customer-first always","subtext":"That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India."},
        {"heading":"No spam or gimmicks","subtext":"No gimmicks, spam, or annoying push notifications. High quality apps that you use at your pace, the way you like."},
        {"heading":"The Zerodha universe","subtext":"Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs."},
        {"heading":"Do better with money","subtext":"With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money."}
    ];
    return ( 
        <div className="container d-flex flex-row justify-content-evenly align-item-center" style={{width:"80%",marginTop:"15vw"}}>
            <div className="row-6 fs-6" style={{width:"35%"}}>
                <h1>Trust with confidence</h1>
                <br /><br />
                {data.map((obj,index)=>(
                    <Subpara key={index} heading = {obj.heading} sub_text = {obj.subtext}/>
                ))}
            </div>
            <div className="row-6" style={{width:"45%"}}>
                <div className="row-6">
                    <img src = "media\images\ecosystem.png" style={{width:"110%"}}/>
                </div>
                <div className="row-6 d-flex flex-row justify-content-center align-item-center w-100">
                    <a href="/" className = "p-2" style={{textDecoration:"none",fontWeight:"bold"}}>Explore Our Products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href="/" className = "p-2" style={{textDecoration:"none",fontWeight:"bold"}}>Try Kite Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Stats;