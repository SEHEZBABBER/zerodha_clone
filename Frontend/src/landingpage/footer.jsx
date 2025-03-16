function Footer() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column" style={{ width: "100vw",marginTop:"10vw",backgroundColor:"#FAFAFA" }}>
        <div className="container d-flex justify-content-center align-items-start flex-row w-100 mt-5">
          
          {/* First Column (Logo & Socials) */}
          <div className="d-flex flex-column flex-grow-1" style={{ maxWidth: "250px" }}>
            <img src="/media/images/logo.svg" alt="Zerodha - logo" style={{ maxWidth: "120px" }} />
            <p style={{width:"85%", fontSize: "13px" }}>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
            
            {/* Social Icons */}
            <div className="d-flex flex-row justify-content-between w-75">
              <a href="https://x.com/zerodhaonline" className="text-dark" style={{textDecoration:"none"}}><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.facebook.com/zerodha.social" className="text-dark" style={{textDecoration:"none"}}><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/zerodhaonline/" className="text-dark" style={{textDecoration:"none"}}><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/zerodha" className="text-dark" style={{textDecoration:"none"}}><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
  
            <hr className="w-75" />
            
            <div className="d-flex flex-row justify-content-between w-75">
              <a href="https://www.youtube.com/@zerodhaonline" className="text-dark" style={{textDecoration:"none"}}><i className="fa-brands fa-youtube"></i></a>
              <a href="https://www.whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g" className="text-dark" style={{textDecoration:"none"}}><i className="fa-brands fa-whatsapp"></i></a>
              <a href="https://t.me/zerodhain" className="text-dark" style={{textDecoration:"none"}}><i className="fa-brands fa-telegram"></i></a>
            </div>
          </div>
  
          {/* Other Columns */}
          <div className="d-flex flex-column flex-grow-1 mb-5">
            <a href="#" className="fw-bold mb-3 text-dark" style={{textDecoration:"none"}}>Company</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>About</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Products</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Pricing</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Referral Program</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Careers</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Zerodha.tech</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Open Source</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Press & Media</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Zerodha Career</a>
          </div>
  
          <div className="d-flex flex-column flex-grow-1 mb-5">
            <a href="#" className="fw-bold mb-3 text-dark" style={{textDecoration:"none"}}>Support</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Contact Us</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Support Portal</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Z-Connect blog</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>List of charges</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Downloads & resources</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Videos</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Market overview</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>How to file a complaint?</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Status of your complaints</a>
          </div>
  
          <div className="d-flex flex-column flex-grow-1">
            <a href="#" className="fw-bold mb-3 text-dark" style={{textDecoration:"none"}}>Account</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Open an Account</a>
            <a href="#" className="mb-2 text-dark" style={{textDecoration:"none"}}>Funds Transfer</a>
          </div>
        </div>
  
        <div className="d-flex flex-column text-muted container " style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 
            CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: 
            IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – 
            SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, 
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. 
            Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
          </p>
          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <p>
          Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
          </p>
        </div>
      </div>
    );
  }
  
  export default Footer;
  