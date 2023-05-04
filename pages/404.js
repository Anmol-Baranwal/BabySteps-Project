import Image from "next/image";
import styles from "@/styles/404.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>User ID valid till 10</div>
      <div className={styles.imageWrapper}>
        <Image
          src="/static/404.png"
          alt="404 page custom illustration"
          width={2500 / 3.8}
          height={1778 / 3.8}
          className={styles.customImage}
        />
      </div>
    </div>
  );
};

export default ErrorPage;
