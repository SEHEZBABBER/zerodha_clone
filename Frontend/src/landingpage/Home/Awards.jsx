function Awards() {
    return ( 
        <div className="container d-flex flex-row justify-content-center align-item-center" style={{marginTop:"15vw"}}>
            <div className="col-6">
                <img src="/media/images/largestBroker.svg"></img>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center align-item-center" style={{width : "40%"}}>
                <div className="row-2">
                    <h1>Larget stock broker in India</h1>
                    <p>2+ millon Zerodha clients contribute to over 15% of all retail orders volumes in India daily by trading and investing in : </p>
                </div>
                <div className="row-2 d-flex flex-row justify-content-between align-item-center w-100">
                        <ul className="p-3">
                            <li className="mt-3">Futures and Options</li>
                            <li className="mt-3">Commodity derivatives</li>
                            <li className="mt-3">Currency derivatives</li>
                        </ul>
                        <ul className="p-3">
                            <li className="mt-3">Stocks & IPOs</li>
                            <li className="mt-3">Direct mutual funds</li>
                            <li className="mt-3">Bonds & Govt. Securities</li>
                        </ul>
                </div>
                <div className="row-2">
                    <img src="/media/images/pressLogos.png" style={{width:"100%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;