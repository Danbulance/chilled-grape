// import Image from "next/image";
// import styles from "./page.module.css";

import Aside from "./components/Aside/Aside";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Test from "./components/Test/Test";

export default async function Page() {
  // Fetch all the data from the API (Server-side)
  const response = await fetch("https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products");
  const data = await response.json();
  const flattenedData = data.flat(); // Flatten the array of arrays

  return (
    <>
      <Header />
      <Aside />
      <Products data={flattenedData} />
      <Footer />
    </>
  );
}

{
  /* <ul>
{posts.map((post) => (
  <li key={post.id}>{post.title}</li>
))}
</ul> */
}
