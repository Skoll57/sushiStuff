import styles from "../../styles/Home.module.css";
import SUSHI from "../../images/sushiBg.png";

const Poster = () => {
  return (
    <section className={styles.home}>
      <div className={styles.title}>Большая распродажа</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>Бестселлер на все времена</div>
          <h1 className={styles.head}>Филадельфия с авокадо</h1>
          <button className={styles.button}>Купить сейчас</button>
        </div>

        <div className={styles.image}>
          <img src={SUSHI} alt="sushi" width="350px" height="300px" />
        </div>
      </div>
    </section>
  );
};

export default Poster;
