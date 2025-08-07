import type { Product } from "./types/Product";

type Props = {
  product: Product;
};

const ProductRow = ({ product }: Props) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <th scope="row">{name}</th>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
