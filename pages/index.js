import Head from "next/head";
import styles from "@/styles/Home.module.css";
import UserList from "@/components/user/userList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Information of Users</title>
        <meta name="description" content="Stop waiting in queues" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <UserList />
      </div>
    </>
  );
}
