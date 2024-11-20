"use client";

import ProductItem from "../ProductItem/ProductItem";
import styles from "./Products.module.scss";
import { useState } from "react";

export default function Products({ data }) {
  const [showAll, setShowAll] = useState(false);

  const initialProducts = data.slice(0, 6);
  const remainingProducts = data.slice(6);

  const productsToShow = showAll ? [...initialProducts, ...remainingProducts] : initialProducts;

  const groupedProducts = [];
  for (let i = 0; i < productsToShow.length; i += 3) {
    groupedProducts.push(productsToShow.slice(i, i + 3));
  }

  const handleLoadMore = () => {
    setShowAll(true);
  };

  return (
    <div className={`${styles.Products} ${styles.inner}`}>
      <div className={styles.grid}>
        {productsToShow.map((product) => (
          <ProductItem key={product.id} data={product} />
        ))}
      </div>

      {!showAll && remainingProducts.length > 0 && (
        <div>
          <a className={styles.loadMoreBtn} onClick={handleLoadMore}>
            Load More
          </a>
        </div>
      )}
    </div>
  );
}
