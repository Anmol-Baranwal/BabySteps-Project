# Description of Project

This is a `next.js` web application that retrieves user information from an external API endpoint and displays them in a paginated table. 
It also offers a search feature that enables users to filter the user list by name or email. Additionally, the project uses server-side rendering to improve performance and SEO.

<hr>

## UserList Component

The `UserList` component is responsible for rendering the user list and implementing the pagination and search functionalities. It uses the 
`useState` hook to manage the state of `users`, `loading`, `currentPage`, `usersPerPage`, and `searchInput`.

The `useEffect` hook is used to fetch users from the external API endpoint and filter them based on the search query whenever `searchInput` changes. It then updates the state of `users` and `loading` accordingly.

The `indexOfLastUser` and `indexOfFirstUser` variables are used to calculate the range of users to display on the current page based on the current page number (`currentPage`) and the number
of users to be displayed per page (`usersPerPage`). The `currentUsers` variable is used to store the sliced users array to display on the current page.

The `totalPages` variable is used to calculate the total number of pages based on the total number of users and the number of users to be displayed per page. The `pageNumbers` array is used to generate unique links for each page.

The `handleSearchFunction` function is used to update the `searchInput` state whenever the user enters a search query in the input field.

The `UserList` component then returns the user list with a search bar, a loading indicator, and a pagination component. The `currentUsers` array is mapped to render each user's data as a table row, which includes their name, username,
email, phone, website, and company name. The company name is nested under the company object. Additionally, the table headers are clickable links that redirect to a user's details page. Finally, the pagination component consists of 
"Previous" and "Next" buttons and clickable page numbers that change the current page number state.

## Dynamic UserDetails

The file exports a default component function called `UserDetails` that takes a single prop called `user`. The function uses destructuring to extract properties from the `user` object such as `name`, `username`, `email`, `phone`, `website`, `company`, 
and `address`. The component renders these properties on the page using JSX.

This component is also associated with two static functions `getStaticProps` and `getStaticPaths`. These functions are used to fetch data at build time.

The `getStaticProps` function is called at build time to fetch data for the specific user ID specified in the dynamic route path (`/user/[id]`). It uses the `fetch` function to make an HTTP request to the JSONPlaceholder API with the user ID. 
The response data is then extracted using the `json()` method of the response object and returned as a prop called `user` to the `UserDetails` component.

The `getStaticPaths` function is called at build time to determine all the possible routes that should be pre-generated. In this case, it uses the `fetch` function to get a list of all the users from the JSONPlaceholder API and maps each user to a 
path object with the user ID as a parameter in the dynamic route. The `fallback` key in the returned object is set to `false` which means that any path that is not returned by `getStaticPaths` will result in a 404 page.

Finally, the component imports a CSS module file `user.module.css` and uses it to style the rendered data on the page.

In summary, the `pages/user/[id].js` file is a dynamic Next.js page that uses the `getStaticProps` and `getStaticPaths` functions to fetch and pre-generate user data for all possible dynamic routes. The `UserDetails` component renders the fetched user data and styles it using a CSS module.

