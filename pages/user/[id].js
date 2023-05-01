import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = res.json();

  return {
    props: { user },
  };
}

export default function UserDetails({ user }) {
  const { loading, name, username, email, phone, website, companyName } = user;

  if (loading) {
    return <p>Loading user details ....</p>;
  }

  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>Company Name: {companyName}</p>
    </div>
  );
}
