import { useState } from "react";
import ProductTable from "./ProductTable";
import Searchbar from "./SearchBar";
import type { Products } from "./types/Product";

const FilterableProductTable = ({ products }: Products) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <Searchbar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onCheck={() => setInStockOnly(!inStockOnly)}
        onSearch={(value: string) => setFilterText(value)}
        // onFilterTextChange={setFilterText}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  );
};

export default FilterableProductTable;
