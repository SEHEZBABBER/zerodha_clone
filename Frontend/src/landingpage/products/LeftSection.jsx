import React from "react";

function LeftSection({
  imagePath,
  heading,
  paragraph,
  link1,
  link2,
  link1_name,
  link2_name,
  playStoreLink,
  appStoreLink,
}) {
  return (
    <div className="container d-flex flex-row align-items-center justify-content-between my-5">
      {/* Left Side - Image */}
      <div className="col-md-6 d-flex justify-content-center">
        <img
          src={imagePath}
          alt={heading}
          className="img-fluid"
          style={{ maxWidth: "90%" }}
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="col-md-5">
        <h2 className="fw-bold">{heading}</h2>
        <p className="text-muted">{paragraph}</p>

        {/* Conditional Links */}
        <div className="d-flex gap-3 mb-3">
          {link1_name && (
            <a href={link1} className="text-primary fw-bold text-decoration-none">
              {`${link1_name} →`}
            </a>
          )}
          {link2_name && (
            <a href={link2} className="text-primary fw-bold text-decoration-none">
              {`${link2_name} →`}
            </a>
          )}
        </div>

        {/* Store Buttons */}
        <div className="d-flex gap-3 align-items-center">
            <a href={playStoreLink} className="d-flex align-items-center">
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "50px", objectFit: "contain" }}
              />
            </a>
            <a href={appStoreLink} className="d-flex align-items-center">
              <img
                src="/media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "50px", objectFit: "contain" }}
              />
            </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
