import type { Dispatch, SetStateAction } from "react";

type Props = {
  filterText: string;
  inStockOnly: boolean;
  onCheck: () => void;
  onSearch: (value: string) => void;
  // onFilterTextChange: Dispatch<SetStateAction<string>>;
};

const Searchbar = ({ filterText, inStockOnly, onCheck, onSearch }: Props) => {
  return (
    <>
      <form>
        <input
          type="search"
          placeholder="Search..."
          style={{ paddingInline: 15, paddingBlock: 5 }}
          value={filterText}
          onChange={(e) => onSearch(e.target.value)}
          // onChange={(e) => onFilterTextChange(e.target.value)}
        />

        <div
          style={{
            marginBlock: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            type="checkbox"
            id="check"
            checked={inStockOnly}
            onChange={onCheck}
          />
          <label htmlFor="check">Only show products in stock</label>
        </div>
      </form>
    </>
  );
};

export default Searchbar;
