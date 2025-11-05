import React, { useState } from "react";
import "./brokerage.css";

function Brockerage() {
  const [activeTab, setActiveTab] = useState("equity");

  const renderTable = () => {
    switch (activeTab) {
      case "equity":
        return (
          <table
            className="table table-bordered mt-4 table-striped no-internal-borders custom-table"
            style={{
              fontSize: "12px",
              wordSpacing: "1px",
              borderSpacing: "0 10px",
            }}
          >
            <thead>
              <tr>
                <th></th>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th>F&O - Futures</th>
                <th>F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-muted">Brokerage </td>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td className="text-muted">STT/CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on the sell side</td>
                <td>0.02% on the sell side</td>
                <td>
                  <ul>
                    <li>
                      0.125% of the intrinsic value on options that are bought
                      and exercised
                    </li>
                    <li>0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="text-muted">Transaction charges </td>{" "}
                <td>
                  NSE: 0.00297% <br></br>BSE: 0.00375%{" "}
                </td>{" "}
                <td>
                  NSE: 0.00297% <br></br>BSE: 0.00375%{" "}
                </td>{" "}
                <td>
                  NSE: 0.00173% <br></br>BSE: 0{" "}
                </td>{" "}
                <td>
                  NSE: 0.03503% (on premium) <br></br>BSE: 0.0325% (on premium)
                </td>
              </tr>
              <tr>
                <td className="text-muted">GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td className="text-muted">SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td className="text-muted">Stamp charges</td>
                <td>0.015% or ₹1500 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        );

      case "currency":
        return (
          <table
            className="table table-bordered mt-4 table-striped no-internal-borders"
            style={{ fontSize: "12px" }}
          >
            <thead >
              <tr>
                <th></th>
                <th>Currency Futures</th>
                <th>Currency options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-muted">Brokerage</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <td className="text-muted">STT/CTT</td>
                <td>No STT </td>
                <td>NO STT</td>
              </tr>
              <tr>
                <td className="text-muted">Transaction Charges</td>
                <td>
                  NSE: 0.00035% <br></br> BSE: 0.00055%
                </td>
                <td>
                  NSE : 0.0311% <br></br>BSE : 0.001%
                </td>
              </tr>
              <tr>
                <td className="text-muted">GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td className="text-muted">SEBI charges </td>
                <td>₹10 / crore</td>
                <td> ₹10 / crore</td>
              </tr>
              <tr>
                <td className="text-muted">Stamp charges</td>
                <td>0.0001% or ₹10 / crore on buy side </td>
                <td> 0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        );

      case "commodity":
        return (
          <table
            className="table table-bordered mt-4 table-striped no-internal-borders"
            style={{ fontSize: "12px" }}
          >
            <thead>
              <tr>
                <th></th>
                <th>Commodity Futures</th>
                <th>Commodity options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-muted">Brokerage</td>
                <td>0.03% or ₹20/executed order (whichever is lower)</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <td className="text-muted">STT/CTT</td>
                <td>0.01% on sell side (non-agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <td className="text-muted">Transaction Charges</td>
                <td>
                  MCX: 0.0027% <br></br> NSE: 0.001%
                </td>
                <td>
                  MCX: 0.0418% <br></br> NSE: 0.001%
                </td>
              </tr>
              <tr>
                <td className="text-muted">GST </td>{" "}
                <td>
                  18% on (brokerage + SEBI charges + transaction charges){" "}
                </td>{" "}
                <td>
                  {" "}
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>
              <tr>
                <td className="text-muted">SEBI charges</td>{" "}
                <td> Agri: ₹1 / crore Non-agri: ₹10 / crore </td>{" "}
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td className="text-muted">Stamp charges </td>{" "}
                <td> 0.002% or ₹200 / crore on buy side </td>{" "}
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container page">
      <div className="p-5">
        {/* Tabs */}
        <div
          style={{ textDecoration: "none" }}
          className="btn-group"
          role="group"
          aria-label="Brockerage Tabs"
        >
          <button
            className={`btn ${
              activeTab === "equity" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setActiveTab("equity")}
          >
            Equity
          </button>
          <button
            className={`btn ${
              activeTab === "currency" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
          <button
            className={`btn ${
              activeTab === "commodity" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setActiveTab("commodity")}
          >
            Commodity
          </button>
        </div>

        {/* Render selected table */}
        {renderTable()}
        <h5 className="text-center p-2 heading-dark">
          <a href="" style={{ textDecoration: "none" }}>
            Calculate your costs
          </a>{" "}
          upfront using our brokerage calculator
        </h5>
      </div>

      <div className="p-5 ">
        <h4 className="heading-dark mb-3">Charges for account opening </h4>
        <table
          className="table table-bordered no-internal-borders table-striped"
          style={{
            fontSize: "12px",
            wordSpacing: "1px",
            borderSpacing: "0 10px",
          }}
        >
          <thead>
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td>
                <span className="badge bg-success">Free</span>
              </td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>
                <span className="badge bg-success">Free</span>
              </td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-5  ">
        <h4 className="heading-dark mb-3">
          Demat AMC (Annual Maintenance Charge){" "}
        </h4>
        <table
          className="table table-bordered no-internal-borders table-striped"
          style={{
            fontSize: "12px",
            wordSpacing: "1px",
            borderSpacing: "0 10px",
          }}
        >
          <thead>
            <tr>
              <th>Value of holdings</th>
              <th>AMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td>
                <span className="badge bg-success">Free</span>
              </td>
            </tr>
            <tr>
              <td>₹4 lakh - ₹10 lakh</td>
              <td>₹ 100 per year, charged quarterly*</td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹ 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: "10.5px" }}>
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA,{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            click here
          </a>
          .
        </p>
      </div>

      <div className="p-5  ">
        <h4 className="heading-dark mb-3">
          {" "}
          Charges for optional value added services
        </h4>
        <table
          className="table table-bordered no-internal-borders table-striped"
          style={{
            fontSize: "12px",
            wordSpacing: "1px",
            borderSpacing: "0 10px",
          }}
        >
          <thead>
            <tr>
              <th>Service</th>
              <th>Billing Frquency</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brockerage;
