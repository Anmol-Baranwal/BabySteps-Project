import Head from "next/head";
import UserList from "@/components/user/userList";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>BabySteps: Cutting edge Solution</title>
        <meta name="description" content="Fetching data of users" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/BabySteps.jpg" />
      </Head>
      <div>
        <UserList />
      </div>
    </div>
  );
}
