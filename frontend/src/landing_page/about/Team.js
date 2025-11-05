import React from "react";

function Team() {
  return (
    <div className="container mb-5 ">
      <div className="row">
        <h3 className=" text-center ">People</h3>
      </div>
      <div className="row px-5 pt-5" style={{ fontSize: "1rem" }}>
        <div className="col-5">
          <div className="text-center">
            <img
            src="/media/images/nithinKamath.jpg"
            alt="founder"
            style={{ width: "70%", borderRadius: "100%" }}
          ></img>
          </div>
          <div className="text-center pt-3 ">
            <h5>Nithin Kamath </h5>
          <p className="text-muted">Founder, CEO</p>
          </div>
        </div>
        <div className="col-7 " style={{ paddingRight:"10rem", paddingTop:"2rem" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Homepage{" "}
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              TradingQnA{" "}
            </a>{" "}
            /
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Twitter{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
