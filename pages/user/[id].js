import styles from "@/styles/user.module.css";

// docs: https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export async function getStaticProps({ params }) {
  // fetch the user details for a specific ID
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  //   details will be returned as a prop to UserDetails component
  return {
    props: { user },
  };
}

// docs: https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await res.json(); // res.json() method returns a Promise that needs to be resolved before we can access the actual data

  const paths = users.map((user) => ({
    params: {
      id: user.id.toString(),
    },
  }));

  return { paths, fallback: false }; // fallback: false -> any paths not returned by getStaticPaths will result in a 404 page
}

export default function UserDetails({ user }) {
  const {
    name,
    username,
    email,
    phone,
    website,
    company: { name: companyName, catchPhrase, bs },
    address: { street, suite, city, zipcode, geo },
  } = user;

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>{name}</h1>
      <p className={styles.content}>
        <span className={styles.subContent}>Username:</span> {username}
      </p>
      <p className={styles.content}>
        <span className={styles.subContent}>Email:</span> {email}
      </p>
      <p className={styles.content}>
        <span className={styles.subContent}>Phone:</span> {phone}
      </p>
      <p className={styles.content}>
        <span className={styles.subContent}>Website:</span> {website}
      </p>

      <h2 className={styles.subHeading}>Address:</h2>
      <p className={styles.content}>
        <span className={styles.subContent}>Street:</span> {street}
      </p>
      <p className={styles.content}>
        <span className={styles.subContent}>Suite:</span> {suite}
      </p>
      <p className={styles.content}>
        <span className={styles.subContent}>City:</span> {city}
      </p>
      <p className={styles.content}>
        <span className={styles.subContent}>Zipcode:</span> {zipcode}
      </p>
      <p className={styles.content}>
        <span className={styles.subContent}>Latitude:</span> {geo.lat}
      </p>
      <p className={styles.content}>
        <span className={styles.subContent}>Longitude:</span> {geo.lng}
      </p>

      <h2 className={styles.subHeading}>Company:</h2>
      <p className={styles.content}>
        <span className={styles.subContent}>Company Name:</span> {companyName}
      </p>
      <p className={styles.content}>
        <span className={styles.subContent}>Catchphrase:</span> {catchPhrase}
      </p>
      <p className={styles.content}>
        <span className={styles.subContent}>BS:</span> {bs}
      </p>
    </div>
  );
}
