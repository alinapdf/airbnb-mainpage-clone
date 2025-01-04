import styles from "./card.module.scss";
import star from "./../../../public/img/icons/star.svg";

const Card = ({
  location,
  desc,
  rating,
  pricePerNight,
  datesAvailable,
  img,
  img2x,
}) => {
  return (
    <article className={styles.card}>
      <a href="#" className={styles.link}></a>
      <img src={img} srcSet={img2x} alt="alt" className={styles.img} />

      <div className={styles.descWrapper}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{location}</h3>
          <div className={styles.rating}>
            <img src="/img/icons/star.svg" alt="star" />
            {rating}
          </div>
        </div>
        <p className={styles.desc}>{desc}</p>
        <p className={styles.date}>{datesAvailable}</p>
        <p className={styles.price}>
          <strong className={styles.strong}>${pricePerNight}</strong> night
        </p>
      </div>
    </article>
  );
};

export default Card;
