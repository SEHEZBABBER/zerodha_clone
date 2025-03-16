function RightSection({ imagePath, heading, paragraph, link, link_name }) {
  return (
    <div className="container d-flex flex-row-reverse align-items-center justify-content-between my-5">
      {/* Right Side - Image */}
      <div className="col-md-6 d-flex justify-content-center">
        <img
          src={imagePath}
          alt={heading}
          className="img-fluid"
          style={{ maxWidth: "90%" }}
        />
      </div>

      {/* Left Side - Text Content */}
      <div className="col-md-5">
        <h2 className="fw-bold">{heading}</h2>
        <p className="text-muted">{paragraph}</p>

        {/* Learn More Link (Only Show Arrow if link_name Exists) */}
        {link_name && (
          <div>
            <a href={link} className="text-primary fw-bold text-decoration-none">
              {link_name} →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default RightSection;
