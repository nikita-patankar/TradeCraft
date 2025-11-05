import React from "react";

function Hero() {
  return (
    <div className="container-fluid bg-light py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className=" mb-0 heading-dark">Support Portal</h1>
          <button className="btn btn-primary">My tickets</button>
        </div>

        <div className="input-group shadow-sm">
          <span className="input-group-text bg-white border-end-0">
            <faSearch className="text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-start-0 py-3"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
