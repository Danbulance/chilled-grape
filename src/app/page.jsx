// import Image from "next/image";
// import styles from "./page.module.css";

import Aside from "./components/Aside/Aside";
import Button from "./components/Button/Button";

export default async function Page() {
  let data = await fetch("https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products");
  let posts = await data.json();
  console.log(posts);
  return (
    <>
      <ul>
        {posts[0].map((post) => (
          <li key={post.id}>{post.price}</li>
        ))}
      </ul>

      <Aside />
    </>
  );
}
