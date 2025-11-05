import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  linkurl,
  linkname,
}) {
  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-4 pt-5 mt-5">
          <h2 className="pb-2 pt-3 mt-5">{productName}</h2>
          <p className="text-muted lh-base" style={{ fontSize: "17px" }}>
            {productDescription}{" "}
          </p>
          <div className="pb-4  fw-semibold">
            <a href={linkurl} style={{ textDecoration: "none" }}>
              {linkname}
            </a>
          </div>
        </div>
        <div className="col-8">
          {" "}
          <img src={imageUrl} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
