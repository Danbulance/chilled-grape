import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

export default async function Page() {
  const response = await fetch("https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products");
  const data = await response.json();
  const flattenedData = data.flat(); // Removes the array within the array

  return (
    <>
      <Header />
      <Aside />
      <Products data={flattenedData} />
      <Footer />
    </>
  );
}
