import { ArrowUpRight } from "lucide-react";

type Product = {
  number: string;
  name: string;
  description: string;
  href: string;
  flow: string[];
  outcome: string;
};

type Props = {
  products: Product[];
};

export default function ProductLineCards({ products }: Props) {
  return (
    <div className="product-line-grid">
      {products.map((product) => (
        <a
          className="product-line-card"
          href={product.href}
          key={product.name}
        >
          <div className="product-card-top">
            <span>Product {product.number}</span>
            <ArrowUpRight size={17} />
          </div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="mini-pipeline" aria-label={`${product.name} pipeline`}>
            {product.flow.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
          <strong>{product.outcome}</strong>
        </a>
      ))}
    </div>
  );
}
