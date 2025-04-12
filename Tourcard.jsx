import React, { useState } from "react";

const TourCard = ({ id, name, info, price, image, onRemove }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      <img src={image} alt={name} className="tour-img" />
      <div className="tour-info">
        <h3>{name}</h3>
        <h5>${price}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="btn-remove" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default TourCard;
