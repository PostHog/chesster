export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  category: "sets" | "boards" | "pieces" | "accessories" | "clocks";
  images: string[];
  badge?: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  features: string[];
}

export const products: Product[] = [
  {
    id: "staunton-championship",
    name: "Staunton Championship Set",
    price: 189,
    description:
      "Tournament-grade Staunton pieces in weighted boxwood with a walnut board.",
    longDescription:
      "Our flagship tournament set features triple-weighted pieces crafted from premium boxwood and ebonized boxwood. Each piece is hand-finished with a billiard cloth base for smooth, silent play. The 21-inch walnut board has algebraic notation inlaid in maple. Meets FIDE standards for official tournament play.",
    category: "sets",
    images: ["/products/staunton-championship.jpg"],
    badge: "Best Seller",
    rating: 4.9,
    reviewCount: 247,
    inStock: true,
    features: [
      "Triple-weighted pieces",
      "3.75\" king height",
      "21\" walnut board",
      "FIDE tournament compliant",
      "Billiard cloth bases",
    ],
  },
  {
    id: "italian-marble-set",
    name: "Italian Marble Luxury Set",
    price: 649,
    originalPrice: 799,
    description:
      "Hand-carved Carrara and Nero Marquina marble pieces on a matching marble board.",
    longDescription:
      "Sculpted by master artisans in Volterra, Italy, this set features pieces carved from genuine Carrara white marble and Nero Marquina black marble. The board is a single slab of marble with alternating squares hand-polished to a mirror finish. Each set includes a certificate of authenticity and a velvet-lined storage case.",
    category: "sets",
    images: ["/products/italian-marble.jpg"],
    badge: "Sale",
    rating: 4.8,
    reviewCount: 83,
    inStock: true,
    features: [
      "Genuine Carrara marble",
      "Hand-carved in Volterra",
      "Certificate of authenticity",
      "Velvet storage case",
      "4.5\" king height",
    ],
  },
  {
    id: "magnetic-travel",
    name: "Magnetic Travel Chess Set",
    price: 34,
    description:
      "Compact folding board with magnetic pieces — perfect for play on the go.",
    longDescription:
      "Never miss a game while traveling. This elegant folding set features strong neodymium magnets embedded in each piece, keeping your game secure on planes, trains, and coffee shop tables. The board folds in half to become its own storage case, with individual felt compartments for each piece.",
    category: "sets",
    images: ["/products/magnetic-travel.jpg"],
    rating: 4.6,
    reviewCount: 512,
    inStock: true,
    features: [
      "Neodymium magnets",
      "Folding board/case",
      "Felt compartments",
      '10" x 10" open',
      "Weighs only 380g",
    ],
  },
  {
    id: "isle-of-lewis",
    name: "Isle of Lewis Replica Set",
    price: 329,
    description:
      "Museum-quality reproduction of the iconic 12th-century Norse chess pieces.",
    longDescription:
      "Faithfully reproduced from the original 12th-century pieces discovered on the Isle of Lewis in Scotland. Cast in crusite stone resin with an antiqued ivory finish, each piece captures the expressive character of the medieval originals. Paired with a leather-bound board featuring Celtic knotwork borders.",
    category: "sets",
    images: ["/products/isle-of-lewis.jpg"],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    features: [
      "Crushed stone resin",
      "Antiqued ivory finish",
      "Leather-bound board",
      "Celtic knotwork border",
      "Historical reference booklet",
    ],
  },
  {
    id: "walnut-maple-board",
    name: "Walnut & Maple Tournament Board",
    price: 119,
    description: "Solid hardwood board with inlaid algebraic notation.",
    longDescription:
      "Built for serious play, this 21-inch board is crafted from alternating squares of American black walnut and hard maple. Algebraic notation is laser-engraved along the borders. The board features a satin polyurethane finish that protects the wood while maintaining a natural feel. Rubber feet prevent sliding during play.",
    category: "boards",
    images: ["/products/walnut-maple-board.jpg"],
    rating: 4.8,
    reviewCount: 189,
    inStock: true,
    features: [
      "American black walnut",
      "Hard maple inlay",
      "21\" playing surface",
      "Laser-engraved notation",
      "Non-slip rubber feet",
    ],
  },
  {
    id: "rosewood-board",
    name: "Indian Rosewood Prestige Board",
    price: 289,
    originalPrice: 339,
    description:
      "Premium rosewood and bird's-eye maple with hand-cut dovetail edges.",
    longDescription:
      "A board worthy of your finest pieces. Crafted from sustainably sourced Indian rosewood and bird's-eye maple, each square is precision-cut and hand-fitted. The frame features traditional dovetail joinery visible at the corners, showcasing the craftsmanship. Finished with hand-rubbed tung oil for a deep, warm luster.",
    category: "boards",
    images: ["/products/rosewood-board.jpg"],
    badge: "Sale",
    rating: 4.9,
    reviewCount: 74,
    inStock: true,
    features: [
      "Indian rosewood",
      "Bird's-eye maple",
      "Hand-cut dovetails",
      "Tung oil finish",
      "23\" playing surface",
    ],
  },
  {
    id: "ebony-boxwood-pieces",
    name: "Ebony & Boxwood Staunton Pieces",
    price: 225,
    description:
      "Competition-grade pieces in genuine ebony and boxwood with leather bases.",
    longDescription:
      "Elevate your game with these exquisite Staunton pieces turned from genuine ebony and Ceylon boxwood. Each piece is hand-polished and fitted with a genuine leather base weighted with brass. The knights feature hand-carved bridled manes with exceptional detail. Includes a fitted mahogany storage box.",
    category: "pieces",
    images: ["/products/ebony-boxwood.jpg"],
    rating: 4.8,
    reviewCount: 132,
    inStock: true,
    features: [
      "Genuine ebony & boxwood",
      "Leather & brass weighted",
      "Hand-carved knights",
      '4" king height',
      "Mahogany storage box",
    ],
  },
  {
    id: "dgt-north",
    name: "DGT North American Chess Clock",
    price: 89,
    description:
      "Official tournament clock with Fischer, Bronstein, and custom time controls.",
    longDescription:
      "The DGT North American is the clock of choice for USCF and FIDE tournaments worldwide. Features a large, easy-to-read display, 25+ timing modes including Fischer and Bronstein increment, and a durable ABS housing that withstands years of competitive use. Runs on a single AA battery for up to 5 years of regular use.",
    category: "clocks",
    images: ["/products/dgt-clock.jpg"],
    rating: 4.7,
    reviewCount: 341,
    inStock: true,
    features: [
      "USCF & FIDE approved",
      "25+ timing modes",
      "Large LCD display",
      "5-year battery life",
      "Tournament-grade ABS housing",
    ],
  },
  {
    id: "leather-roll-board",
    name: "Tournament Leather Roll-Up Board",
    price: 42,
    description: "Full-size vinyl tournament board that rolls up for transport.",
    longDescription:
      "The standard for tournament directors and club players everywhere. This regulation-size vinyl board features a faux-leather texture, crisp printed squares, and algebraic notation. Rolls up tightly for easy transport and lays perfectly flat on any surface. Available in classic green/cream.",
    category: "boards",
    images: ["/products/leather-roll.jpg"],
    rating: 4.5,
    reviewCount: 623,
    inStock: true,
    features: [
      "Regulation 20\" size",
      "Faux-leather texture",
      "Lays flat instantly",
      "Algebraic notation",
      "Green/cream colorway",
    ],
  },
  {
    id: "piece-bag-deluxe",
    name: "Deluxe Drawstring Piece Bag",
    price: 18,
    description: "Heavy-duty canvas bag with fleece lining to protect pieces.",
    longDescription:
      "Keep your pieces safe between games. This oversized drawstring bag is made from heavy-duty waxed canvas with a soft fleece lining that cushions pieces during transport. The reinforced leather drawstring and brass grommets ensure years of daily use. Fits pieces up to 4.25\" king height.",
    category: "accessories",
    images: ["/products/piece-bag.jpg"],
    rating: 4.4,
    reviewCount: 289,
    inStock: true,
    features: [
      "Waxed canvas exterior",
      "Fleece lining",
      "Leather drawstring",
      "Brass grommets",
      'Fits up to 4.25" king',
    ],
  },
  {
    id: "scorebook-hardcover",
    name: "Hardcover Chess Scorebook",
    price: 15,
    description:
      "100-game scorebook with lay-flat binding and archival-quality paper.",
    longDescription:
      "Document your chess journey in this beautifully bound scorebook. Features 100 game sheets printed on acid-free, archival-quality paper with a lay-flat binding that keeps pages open during play. Each sheet includes diagram space, move notation grids, and fields for event details, time control, and result.",
    category: "accessories",
    images: ["/products/scorebook.jpg"],
    rating: 4.6,
    reviewCount: 178,
    inStock: true,
    features: [
      "100 game sheets",
      "Lay-flat binding",
      "Archival-quality paper",
      "Diagram space included",
      "Event detail fields",
    ],
  },
  {
    id: "modern-minimalist-set",
    name: "Modern Minimalist Set",
    price: 159,
    description:
      "Clean geometric pieces in brushed aluminum on a concrete and oak board.",
    longDescription:
      "Where chess meets contemporary design. These precision-machined aluminum pieces feature clean geometric forms that are instantly recognizable yet thoroughly modern. The board pairs raw concrete squares with oiled white oak for an industrial-chic aesthetic. A conversation piece that happens to be a chess set.",
    category: "sets",
    images: ["/products/modern-minimalist.jpg"],
    rating: 4.5,
    reviewCount: 94,
    inStock: false,
    features: [
      "Brushed aluminum pieces",
      "Concrete & oak board",
      "CNC-machined precision",
      "Felt-lined bases",
      "Gift box included",
    ],
  },
  {
    id: "posthog-hedgehog-set",
    name: "PostHog Hedgehog Collector's Set",
    price: 219,
    description:
      "Limited-edition Staunton set with hedgehog-carved knights, co-designed with PostHog.",
    longDescription:
      "A playful collaboration with the team at PostHog. This tournament-weight set keeps the classic Staunton silhouette for every piece — except the knights, which have been reimagined as PostHog's signature hedgehog mascot, hand-carved in boxwood. Pieces are triple-weighted with billiard cloth bases, and the set ships in an orange felt-lined case stamped with the PostHog wordmark. A portion of proceeds supports open-source chess software.",
    category: "sets",
    images: ["/products/posthog-hedgehog.jpg"],
    badge: "New",
    rating: 4.8,
    reviewCount: 42,
    inStock: true,
    features: [
      "Hedgehog-carved knights",
      "Triple-weighted boxwood pieces",
      "3.75\" king height",
      "Orange felt-lined case",
      "PostHog wordmark embossing",
    ],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge || p.rating >= 4.8).slice(0, 4);
}

export function formatPrice(cents: number): string {
  return `$${cents.toFixed(2)}`;
}
