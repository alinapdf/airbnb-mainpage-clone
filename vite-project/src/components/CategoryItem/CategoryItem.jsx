import styles from "./categoryitem.module.scss";
import p from "./../../../public/img/categories/01.svg";

const CategoryItem = ({ title, img }) => {
  return (
    <div className={styles.categoryItem}>
      <div className={styles.categoryImg}>
        <img src={img} alt="01" />
      </div>
      <div className={styles.categoryTitle}>{title}</div>
    </div>
  );
};

export default CategoryItem;
