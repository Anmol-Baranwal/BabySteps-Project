// docs: https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export async function getStaticProps({ params }) {
  // fetch the user details for a specific ID
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = res.json();

  //   details will be returned as a prop to UserDetails component
  return {
    props: { user },
  };
}

// docs: https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = res.json();

  const paths = users.map((user) => ({
    params: {
      id: user.id.toString(),
    },
  }));

  return { paths, fallback: false }; // fallback: false -> any paths not returned by getStaticPaths will result in a 404 page
}

export default function UserDetails({ user }) {
  const {
    loading,
    name,
    username,
    email,
    phone,
    website,
    company: { name: companyName, catchPhrase, bs },
    address: { street, suite, city, zipcode, geo },
  } = user;

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

      <h2>Address:</h2>
      <p>Street: {street}</p>
      <p>Suite: {suite}</p>
      <p>City: {city}</p>
      <p>Zipcode: {zipcode}</p>
      <p>Latitude: {geo.lat}</p>
      <p>Longitude: {geo.lng}</p>

      <h2>Company:</h2>
      <p>Company Name: {companyName}</p>
      <p>Catchphrase: {catchPhrase}</p>
      <p>BS: {bs}</p>
    </div>
  );
}
