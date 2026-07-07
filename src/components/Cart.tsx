"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-context";
import { formatPrice, type Product } from "@/lib/products";

const categoryIcon: Record<Product["category"], string> = {
  sets: "♚",
  boards: "▦",
  pieces: "♞",
  clocks: "⏱",
  accessories: "♟",
};

export function Cart() {
  // `state` holds the cart contents and open/closed flag. It must be pulled
  // from the cart context before the component reads `state.isOpen` /
  // `state.items` below — otherwise rendering throws
  // `ReferenceError: state is not defined`.
  const { state, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!state.isOpen}
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${
          state.isOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!state.isOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-card-bg shadow-xl transition-transform ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold">
            Your Cart
            {state.items.length > 0 && (
              <span className="text-muted"> ({state.items.length})</span>
            )}
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-muted hover:text-foreground transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {state.items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <span className="mb-4 block text-5xl">♟</span>
            <p className="mb-2 text-muted">Your cart is empty</p>
            <p className="mb-6 text-sm text-muted">
              Add a few pieces to get started.
            </p>
            <Link
              href="/shop"
              onClick={closeCart}
              className="inline-block rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {state.items.map((item) => (
                <li key={item.id} className="flex gap-4 py-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-gray-100 to-gray-200 text-2xl dark:from-gray-800 dark:to-gray-900">
                    <span className="opacity-40">
                      {categoryIcon[item.category]}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        href={`/product/${item.id}`}
                        onClick={closeCart}
                        className="text-sm font-medium hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                      <span className="text-sm font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center rounded-md border border-border">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          aria-label={`Decrease quantity of ${item.name}`}
                          className="px-2 py-1 text-muted hover:text-foreground"
                        >
                          −
                        </button>
                        <span className="min-w-6 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          aria-label={`Increase quantity of ${item.name}`}
                          className="px-2 py-1 text-muted hover:text-foreground"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-muted hover:text-red-500 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-border px-6 py-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-muted">Subtotal</span>
                <span className="text-lg font-semibold">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mb-4 text-xs text-muted">
                Shipping and taxes calculated at checkout.
              </p>
              <Link
                href="/cart"
                onClick={closeCart}
                className="block w-full rounded-md bg-accent py-3 text-center text-sm font-medium text-white transition-colors hover:bg-accent-dark"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
