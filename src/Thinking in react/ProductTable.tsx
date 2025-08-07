import type { ReactElement } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import type { Product } from "./types/Product";

type Props = {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
};

const ProductTable = ({ products, inStockOnly, filterText }: Props) => {
  const rows: ReactElement[] = [];
  let lastCategory: string;

  if (inStockOnly) {
    products = products.filter((product) => product.stocked);
  }

  if (filterText) {
    products = products.filter((product) => product.name.includes(filterText));
  }

  products.map((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }

    rows.push(<ProductRow key={product.name} product={product} />);

    lastCategory = product.category;
  });

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
