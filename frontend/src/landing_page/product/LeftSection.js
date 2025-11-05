import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  tryDemoDescription,
  learnMore,
  learnMoreDescription,
  googlePlayLink,
  appStoreLink,
}) {
  return (
    <div className="container mb-2">
      <div className="row p-3">
        <div className="col-8 p-3 ">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
        <div className="col-4 p-3 mt-5">
          <h2 className="pb-2 pt-3">{productName}</h2>
          <p className="text-muted lh-base" style={{ fontSize: "17px" }}>
            {productDescription}
          </p>
          <div className="pb-4  fw-semibold">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              {tryDemoDescription}
            </a>
            <a
              href={learnMore}
              className=" ms-2 ps-5 fw-semibold"
              style={{ textDecoration: "none" }}
            >
              {learnMoreDescription}
            </a>
          </div>
          <div>
            <a href={googlePlayLink}>
              {" "}
              <img src="\media\images\googlePlayBadge.svg"></img>
            </a>
            <a href={appStoreLink} className="ps-2">
              {" "}
              <img src="/media/images/appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
