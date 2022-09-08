import React from "react";
import styles from "./card.module.css";

const userImage = "https://i.ibb.co/yWZR9j0/Avatar.png";

const FlipCard = ({ image, name, designation, phone }) => {
  return (
    <div className={styles.card}>
      <img src={image || userImage} className={styles.user_img} alt={name} />

      <div className={styles.hover_container}>
        <h5>{name}</h5>

        <div>
          {designation && (
            <p className="text-center" style={{ fontSize: "15px" }}>
              {designation}
            </p>
          )}
          {phone && (
            <a className="btn w-100 btn-dark" href={`tel:${phone}`}>
              &nbsp;Call Now&nbsp;
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
