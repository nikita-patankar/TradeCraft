import React from "react";
import "./createTicket.css"

import {
  FaPlusCircle,
  FaUserCircle,
  FaEye,
  FaRupeeSign,
  FaChartPie,
  FaCoins,
} from "react-icons/fa";

function CreateTicket() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* LEFT SIDE: Accordions */}
        <div className="col-lg-8 col-md-12">
          <div className="accordion" id="supportAccordion">
            {/* Accordion Item 1 */}
            <div className="accordion-item mb-3 border">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  <FaPlusCircle className="me-2 text-primary" />
                  <span>Account Opening</span>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="#">Minor</a>
                    </li>
                    <li>
                      <a href="#">Non Resident Indian (NRI)</a>
                    </li>
                    <li>
                      <a href="#">Resident individual</a>
                    </li>
                    <li>
                      <a href="#">Company, Partnership, HUF and LLP</a>
                    </li>
                    <li>
                      <a href="#">Glossary</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accordion Item 2 */}
            <div className="accordion-item mb-3 border">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  <FaUserCircle className="me-2 text-primary" />
                  <span>Your Zerodha Account</span>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="#">Your Profile</a>
                    </li>
                    <li>
                      <a href="#">Account modification </a>
                    </li>
                    <li>
                      <a href="#">Client Master Report (CMR) and Depository
                      Participant (DP)</a>
                    </li>
                    <li>
                      <a href="#">Nomination</a>
                    </li>
                    <li>
                      <a href="#">Transfer and conversion of securities</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accordion Item 3 */}
            <div className="accordion-item mb-3 border">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  <FaEye className="me-2 text-primary" />
                  <span>Kite</span>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="#">IPO</a>
                    </li>
                    <li>
                      <a href="#">Trading FAQs</a>
                    </li>
                    <li>
                      <a href="#">Margin Trading Facility (MTF) and Margins</a>
                    </li>
                    <li>
                      <a href="#">Charts and orders</a>
                    </li>
                    <li>
                      <a href="#">Alerts and Nudges</a>
                    </li>
                    <li>
                      <a href="#">General</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accordion Item 4 */}
            <div className="accordion-item mb-3 border">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                >
                  <FaRupeeSign className="me-2 text-primary" />
                  <span>Funds</span>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="#">Add money</a>
                    </li>
                    <li>
                      <a href="#">Withdraw money</a>
                    </li>
                    <li>
                      <a href="#">Add bank accounts</a>
                    </li>
                    <li>
                      <a href="#">eMandates</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accordion Item 5 */}
            <div className="accordion-item mb-3 border">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                >
                  <FaChartPie className="me-2 text-primary" />
                  <span>Console</span>
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Corporate actions</a>
                    </li>
                    <li>
                      <a href="#"> Funds statement</a>
                    </li>
                    <li>
                      <a href="#">Reports</a>
                    </li>
                    <li>
                      <a href="#">Profile</a>
                    </li>
                    <li>
                      <a href="#">Segments</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accordion Item 6 */}
            <div className="accordion-item mb-3 border">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                >
                  <FaCoins className="me-2 text-primary" />
                  <span>Coin</span>
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="#">Mutual funds</a>
                    </li>
                    <li>
                      <a href="#">National Pension Scheme</a>
                    </li>
                    <li>
                      <a href="#">Fixed Deposit (FD)</a>
                    </li>
                    <li>
                      <a href="#">Features on coin</a>
                    </li>
                    <li>
                      <a href="#">Payments and Order</a>
                    </li>
                    <li>
                      <a href="#">General</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Sidebar */}
        <div className="col-lg-4 col-md-12">
          {/* Announcements */}
          <div className="p-3 mb-4" style={{ backgroundColor: "#fff5ec" }}>
            <div
              style={{
                borderLeft: "4px solid orange",
                paddingLeft: "8px",
              }}
            >
              <ul className=" mb-0">
                <li>
                  <a href="#" className="p-2" >
                    Offer for sale (OFS) – November 2025
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2">
                    Latest Intraday leverages and Square-off timings
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border">
            <div className="p-2 bg-light fw-bold border-bottom">
              Quick links
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                1. <a href="#">Track account opening</a>
              </li>
              <li className="list-group-item">
                2. <a href="#">Track segment activation</a>
              </li>
              <li className="list-group-item">
                3. <a href="#">Intraday margins</a>
              </li>
              <li className="list-group-item">
                4. <a href="#">Kite user manual</a>
              </li>
              <li className="list-group-item">
                5. <a href="#">Learn how to create a ticket</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
