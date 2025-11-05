import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgb(250,250,250)",
        borderTop: "1px solid #ddd",
      }}
    >
      <div className="container  mt-5 pt-5 pb-3">
        <div className="row">
           <div className="col-md-3 mb-4">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "60%" }}
            />
            <p className="pt-3 text-muted small">
              © 2010 - 2025, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className=" mb-3 text-muted">Company</h5>
            <div className="d-flex flex-column">
              <a href="/about" className="text-muted text-decoration-none py-1">
                About
              </a>
              <a
                href="/philosophy"
                className="text-muted text-decoration-none py-1"
              >
                Philosophy
              </a>
              <a href="/press" className="text-muted text-decoration-none py-1">
                Press & media
              </a>
              <a href="/careers" className="text-muted text-decoration-none py-1">
                Careers
              </a>
              <a href="/csr" className="text-muted text-decoration-none py-1">
                Zerodha Cares (CSR)
              </a>
              <a
                href="/zerodha-tech"
                className="text-muted text-decoration-none py-1"
              >
                Zerodha.tech
              </a>
              <a
                href="/open-source"
                className="text-muted text-decoration-none py-1"
              >
                Open source
              </a>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className=" mb-3 text-muted">Support</h5>
            <div className="d-flex flex-column">
              <a href="/support" className="text-muted text-decoration-none py-1">
                Contact us
              </a>
              <a href="/support" className="text-muted text-decoration-none py-1">
                Support portal
              </a>
              <a href="/support" className="text-muted text-decoration-none py-1">
                How to file a complaint?
              </a>
              <a href="/support" className="text-muted text-decoration-none py-1">
                Status of your complaints
              </a>
              <a href="/support" className="text-muted text-decoration-none py-1">
                Bulletin
              </a>
              <a href="/support" className="text-muted text-decoration-none py-1">
                Circular
              </a>
              <a href="/support" className="text-muted text-decoration-none py-1">
                Z-Connect blog
              </a>
              <a href="/support" className="text-muted text-decoration-none py-1">
                Downloads
              </a>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className=" mb-3 text-muted">Account</h5>
            <div className="d-flex flex-column">
              <a href="/account" className="text-muted text-decoration-none py-1">
                Open demat account
              </a>
              <a href="/account" className="text-muted text-decoration-none py-1">
                Minor demat account
              </a>
              <a href="/account" className="text-muted text-decoration-none py-1">
                NRI demat account
              </a>
              <a href="/account" className="text-muted text-decoration-none py-1">
                Commodity
              </a>
              <a href="/account" className="text-muted text-decoration-none py-1">
                Dematerialisation
              </a>
              <a href="/account" className="text-muted text-decoration-none py-1">
                Fund transfer
              </a>
              <a href="/account" className="text-muted text-decoration-none py-1">
                MTF
              </a>
              <a href="/account" className="text-muted text-decoration-none py-1">
                Referral program
              </a>
            </div>
          </div>
        </div>
        <p className="text-muted mt-5" style={{ fontSize: "12px" }}>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
          Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          For any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF <br></br> <br></br>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name,
          PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
          Communication, Speedy redressal of the grievances <br></br>
          <br></br>
          Smart Online Dispute Resolution | Grievances Redressal Mechanism
          <br></br>
          <br></br>
          Investments in securities market are subject to market risks; read
          all the related documents carefully before investing.<br></br>
          <br></br>
          Attention investors: 1) Stock brokers can accept securities as
          margins from clients only by way of pledge in the depository system
          w.e.f September 01, 2020. 2) Update your e-mail and phone number
          with your stock broker / depository participant and receive OTP
          directly from depository on your e-mail and/or mobile number to
          create pledge. 3) Check your securities / MF / bonds in the
          consolidated account statement issued by NSDL/CDSL every month.
          <br></br>
          <br></br>
          India's largest broker based on networth as per NSE. NSE broker
          factsheet<br></br>
          <br></br>
          "Prevent unauthorised transactions in your account. Update your
          mobile numbers/email IDs with your stock brokers. Receive
          information of your transactions directly from Exchange on your
          mobile/email at the end of the day. Issued in the interest of
          investors. KYC is one time exercise while dealing in securities
          markets - once KYC is done through a SEBI registered intermediary
          (broker, DP, Mutual Fund etc.), you need not undergo the same
          process again when you approach another intermediary." Dear
          Investor, if you are subscribing to an IPO, there is no need to
          issue a cheque. Please write the Bank account number and sign the
          IPO application form to authorize your bank to make payment in case
          of allotment. In case of non allotment the funds will remain in your
          bank account. As a business we don't give stock tips, and have not
          authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here. <br></br>
          <br></br>
        </p>
        <div className="container text-center py-3 ">
          <div className="d-flex justify-content-center flex-wrap gap-3 small">
            <a href="#" className="text-secondary text-decoration-none">
              NSE
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              BSE
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              MCX
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Terms &amp; conditions
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Policies &amp; procedures
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Privacy policy
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Disclosure for investor's attention
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Investor charter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
