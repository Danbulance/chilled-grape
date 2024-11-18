"use client";

import ProductItem from "../ProductItem/ProductItem";
import styles from "./Products.module.scss";
import { useState } from "react";

export default function Products({ data }) {
  // State to track whether to show all items or just the first 6
  const [showAll, setShowAll] = useState(false);

  // Slice data into the first 6 and the rest (remaining 4)
  const initialProducts = data.slice(0, 6); // First 6 products
  const remainingProducts = data.slice(6); // Remaining products (4)

  // Combine initial and remaining products based on state
  const productsToShow = showAll ? [...initialProducts, ...remainingProducts] : initialProducts;

  // Group products into rows of 3
  const groupedProducts = [];
  for (let i = 0; i < productsToShow.length; i += 3) {
    groupedProducts.push(productsToShow.slice(i, i + 3)); // Grouping into sets of 3 products
  }

  // Function to handle showing more products
  const handleLoadMore = () => {
    setShowAll(true); // Set the state to show all products
  };

  return (
    <div className={`${styles.Products} ${styles.inner}`}>
      <div className={styles.grid}>
        {/* Render each group of 3 products in its own row */}
        {groupedProducts.map((group, index) => (
          <div key={index} className={styles.productRow}>
            {group.map((product) => (
              <ProductItem key={product.id} data={product} />
            ))}
          </div>
        ))}
      </div>

      {/* Load More button */}
      {!showAll && remainingProducts.length > 0 && (
        <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
