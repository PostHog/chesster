"use client";

import { useCart } from "@/components/cart-context";
import type { Product } from "@/lib/products";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <button
      disabled={!product.inStock}
      onClick={() => addItem(product)}
      className={`flex-1 py-3 rounded-md font-medium text-sm transition-colors ${
        product.inStock
          ? "bg-accent text-white hover:bg-accent-dark"
          : "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
      }`}
    >
      {product.inStock ? "Add to Cart" : "Sold Out"}
    </button>
  );
}
