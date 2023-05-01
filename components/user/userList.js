import { useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = res.json();
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
      } catch (err) {
        console.log("error in fetching users" + err);
      }
    }
    fetchUsers();
  }, []); // When this list is empty ([]), it means that the effect will only run once when the component mounts, and never again.

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => {
        // we can also use: ({ id, name, username, email, phone, website, companyName }) => {
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Company Name: {user.company.name}</p>
        </div>;
      })}
    </div>
  );
}

export default userList;
