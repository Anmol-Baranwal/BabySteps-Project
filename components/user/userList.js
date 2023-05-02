import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./userList.module.css";
// import cls from "classnames";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // add loading state

  console.log({ users });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        const users = data.map(
          ({
            id,
            name,
            username,
            email,
            phone,
            website,
            company: { name: companyName },
          }) => ({
            id,
            name,
            username,
            email,
            phone,
            website,
            companyName,
          })
        );
        console.log({ users });
        setUsers(users);
        setLoading(false); // since data is fetched
      } catch (err) {
        console.log("error in fetching users" + err);
      }
    }
    fetchUsers();
  }, []); // When this list is empty ([]), it means that the effect will only run once when the component mounts, and never again.

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>User List</h1>
      {loading ? ( // check if loading is true or false
        <p className={styles.loading}>Loading users...</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableheading}>Name</th>
              <th className={styles.tableheading}>Username</th>
              <th className={styles.tableheading}>Email</th>
              <th className={styles.tableheading}>Phone</th>
              <th className={styles.tableheading}>Website</th>
              <th className={styles.tableheading}>Company Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              // we can also use: ({ id, name, username, email, phone, website, companyName }) => {
              return (
                <tr key={user.id} className={styles.userBlock}>
                  <Link href={`/user/${user.id}`} className={styles.customLink}>
                    {/* <td className={cls(styles.name, styles.tablecell)}> */}
                    <td className={styles.name}>{user.name}</td>
                  </Link>
                  <td className={styles.tablecell}>{user.username}</td>
                  <td className={styles.tablecell}>{user.email}</td>
                  <td className={styles.tablecell}>{user.phone}</td>
                  <td className={styles.tablecell}>{user.website}</td>
                  <td className={styles.tablecell}>{user.companyName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserList;
