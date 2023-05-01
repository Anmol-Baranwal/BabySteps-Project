function UserList() {
  const [users, setUsers] = useState([]);

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
