import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./userList.module.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4); // Set the number of users to be displayed per page

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
        setUsers(users);
        setLoading(false);
      } catch (err) {
        console.log("error in fetching users" + err);
      }
    }
    fetchUsers();
  }, []);

  // Calculating the index of the last user
  const indexOfLastUser = currentPage * usersPerPage;

  // Calculating the index of the first user
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  // Slice the users array to get users for displaying on current page
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Calculating the total number of pages
  const totalPages = Math.ceil(users.length / usersPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>User List</h1>
      {loading ? (
        <p className={styles.loading}>Loading users...</p>
      ) : (
        // since JSX expression has one parent element
        <div>
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
              {/* mapping only current users using slice */}
              {currentUsers.map((user) => (
                <tr key={user.id} className={styles.userBlock}>
                  <Link href={`/user/${user.id}`} className={styles.customLink}>
                    <td className={styles.name}>{user.name}</td>
                  </Link>
                  <td className={styles.tablecell}>{user.username}</td>
                  <td className={styles.tablecell}>{user.email}</td>
                  <td className={styles.tablecell}>{user.phone}</td>
                  <td className={styles.tablecell}>{user.website}</td>
                  <td className={styles.tablecell}>{user.companyName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.pagination}>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.paginationBtn}
            >
              Previous
            </button>

            {/* map through the pageNumbers array to generate unique links for each page using key */}
            {pageNumbers.map((number) => (
              <Link
                href="#"
                key={number}
                onClick={() => setCurrentPage(number)}
                className={
                  number === currentPage
                    ? styles.activePage
                    : styles.nonActivePage
                }
              >
                {number}
              </Link>
            ))}

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={styles.paginationBtn}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserList;
