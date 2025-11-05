import React from "react";

function Hero() {
  return (
    <div className="container mt-5 mb-5">
      {/* Header Section */}
      <div className="text-center mt-5 pt-5 mb-5">
        <h2>Pricing</h2>
        <p className="text-muted mb-5 pb-5" style={{fontSize:"15px"}}>
          Free equity investment and flat ₹20 brokerage on intraday trades.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="row text-center m-3 p-3">
        <div className="col-md-4 col-12 p-4">
          <img
            src="/media/images/pricingEquity.svg"
            alt="Equity delivery"
            className="img-fluid mb-3"
            style={{ height: "150px" }}
          />
          <h4 className="heading-dark">Free equity delivery</h4>
          <p className="text-muted p-1" style={{ fontSize: "14px" }}>
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        <div className="col-md-4 col-12 p-4">
          <img
            src="/media/images/intradayTrades.svg"
            alt="Intraday and F&O"
            className="img-fluid mb-3"
            style={{ height: "150px" }}
          />
          <h4 className="heading-dark">Intraday and F&O trades</h4>
          <p className="text-muted p-1" style={{ fontSize: "14px" }}>
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday
            trades across equity, currency, and commodity. Flat ₹20 on all option
            trades.
          </p>
        </div>

        <div className="col-md-4 col-12 p-4">
          <img
            src="/media/images/pricingEquity.svg"
            alt="Free mutual funds"
            className="img-fluid mb-3"
            style={{ height: "150px" }}
          />
          <h4 className="heading-dark">Free direct MF</h4>
          <p className="text-muted p-1" style={{ fontSize: "14px" }}>
            All direct mutual fund investments are absolutely free — ₹0 commissions
            & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
