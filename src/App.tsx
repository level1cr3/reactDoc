import "./App.css";
import FilterableProductTable from "./Thinking in react/FilterableProductTable";
import products from "./Thinking in react/data/products";

function App() {
  return (
    <>
      <FilterableProductTable products={products} />
    </>
  );
}

export default App;
