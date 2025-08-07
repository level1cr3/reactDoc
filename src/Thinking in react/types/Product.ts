export type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

export type Products = {
  products: Product[];
};

// export default Product; // this don't work because export default is for
// export default a type or interface — because types don’t exist at runtime, and export default is meant for values that exist at runtime.
