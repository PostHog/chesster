import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProduct, formatPrice } from "@/lib/products";
import { AddToCartButton } from "@/components/add-to-cart-button";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-sm text-muted mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-foreground transition-colors">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/shop?category=${product.category}`}
          className="hover:text-foreground transition-colors capitalize"
        >
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product image placeholder */}
        <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg flex items-center justify-center relative">
          <span className="text-[8rem] opacity-20">
            {product.category === "sets" && "♚"}
            {product.category === "boards" && "▦"}
            {product.category === "pieces" && "♞"}
            {product.category === "clocks" && "⏱"}
            {product.category === "accessories" && "♟"}
          </span>
          {product.badge && (
            <span
              className={`absolute top-4 left-4 px-3 py-1 text-sm font-medium rounded ${
                product.badge === "Sale"
                  ? "bg-red-500 text-white"
                  : "bg-accent text-white"
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Product details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < Math.floor(product.rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-muted">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            {product.originalPrice && (
              <span className="text-sm text-red-500 font-medium">
                Save {formatPrice(product.originalPrice - product.price)}
              </span>
            )}
          </div>

          <p className="text-muted mb-6 leading-relaxed">
            {product.longDescription}
          </p>

          <div className="mb-8">
            <h3 className="font-semibold text-sm mb-3">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <span className="text-accent">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            <AddToCartButton product={product} />
            <button className="px-4 py-3 border border-border rounded-md text-sm text-muted hover:text-foreground hover:border-foreground transition-colors">
              ♡ Wishlist
            </button>
          </div>

          {product.inStock && (
            <p className="text-xs text-muted mt-4">
              ✓ In stock — ships within 1-2 business days
            </p>
          )}

          <div className="border-t border-border mt-8 pt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs font-medium">Free Shipping</p>
              <p className="text-xs text-muted">Orders $75+</p>
            </div>
            <div>
              <p className="text-xs font-medium">30-Day Returns</p>
              <p className="text-xs text-muted">Hassle-free</p>
            </div>
            <div>
              <p className="text-xs font-medium">Secure Checkout</p>
              <p className="text-xs text-muted">256-bit SSL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
