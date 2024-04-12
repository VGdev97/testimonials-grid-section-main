import React from "react";

const Card = ({
  image,
  bg,
  name,
  job,
  bgImage,
  headerColor,
  descriptionColor,
  header,
  description,
}) => {
  const cardStyle = {
    backgroundColor: bg,
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "90px",
    backgroundPosition: "calc(100% - 20px) 20px",
  };
  return (
    <article className="card" style={cardStyle}>
      <div className="card-header">
        <img src={image} alt={name} />
        <div className="card-header-person">
          <h5 style={{ color: headerColor }}>{name}</h5>
          <p style={{ color: descriptionColor }}>{job}</p>
        </div>
      </div>
      <div className="card-content">
        <h2 style={{ color: headerColor }}>{header}</h2>
        <p style={{ color: descriptionColor }}>{description}</p>
      </div>
    </article>
  );
};

export default Card;
