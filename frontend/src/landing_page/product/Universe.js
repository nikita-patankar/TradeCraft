import React from "react";

function Universe() {
  return (
    <div className="container px-5">
      <div className="row text-center mt-5 pt-5">
        <h1 className="fw-semibold">The Zerodha Universe</h1>
        <p className="p-3 text-muted" style={{ fontSize: "1rem" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Column 1 */}
        <div className="col-md-4 p-5">
          <div className="mb-5">
            <a href="#" style={{ textDecoration: "none" }}>
              <img
                src="/media/images/zerodhaFundhouse.png"
                alt="Zerodha Fundhouse"
                className="img-fluid mb-3"
                style={{ width: "140px", height: "auto" }}
              />
              <p className="text-muted " style={{ fontSize: "0.8rem", lineHeight: "1.5" }}>
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </a>
          </div>

          <div>
            <a href="#" style={{ textDecoration: "none" }}>
              <img
                src="/media/images/smallcaseLogo.png"
                alt="Smallcase"
                className="img-fluid mb-3"
                style={{ width: "140px", height: "auto" }}
              />
              <p className="text-muted" style={{ fontSize: "0.8rem", lineHeight: "1.5" }}>
                Thematic investing platform that helps you invest in diversified
                baskets of stocks or ETFs.
              </p>
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-md-4 p-5">
          <div className="mb-5">
            <a href="#" style={{ textDecoration: "none" }}>
              <img
                src="/media/images/sensibullLogo.svg"
                alt="Sensibull"
                className="img-fluid mb-3"
                style={{ width: "140px", height: "auto" }}
              />
              <p className="text-muted" style={{ fontSize: "0.8rem", lineHeight: "1.5" }}>
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </a>
          </div>

          <div>
            <a href="#" style={{ textDecoration: "none" }}>
              <img
                src="/media/images/streaklogo.png"
                alt="Streak"
                className="img-fluid mb-3"
                style={{ width: "140px", height: "auto" }}
              />
              <p className="text-muted" style={{ fontSize: "0.8rem", lineHeight: "1.5" }}>
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </a>
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-md-4 p-3">
          <div className="mb-5">
            <a href="#" style={{ textDecoration: "none" }}>
              <img
                src="/media/images/dittoLogo.png"
                alt="Ditto"
                className="img-fluid mb-3"
                style={{ width: "140px", height: "auto" }}
              />
              <p className="text-muted" style={{ fontSize: "0.8rem", lineHeight: "1.5" }}>
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
              </p>
            </a>
          </div>

          <div>
            <a href="#" style={{ textDecoration: "none" }}>
              <img
                src="/media/images/goldenpiLogo.png"
                alt="GoldenPi"
                className="img-fluid mb-3"
                style={{ width: "140px", height: "auto" }}
              />
              <p className="text-muted" style={{ fontSize: "0.8rem", lineHeight: "1.5" }}>
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </a>
          </div>
        </div>
         <div className="container p-5 mb-5">
        <div className='row text-center'>
            <button className='p-2 btn btn-primary fs-5' style={{width:"20%",margin: "0 auto "}}>Sign up for free </button>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Universe;
