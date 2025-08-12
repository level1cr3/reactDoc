import { useContext } from "react";
import MyCountContext from "./Context/MyCountContext";

type Props = {
  count: number;
};

const GrandChild = ({ count }: Props) => {
  const hookValue = useContext(MyCountContext); // instead of using hook. we could also use consumer component.

  return (
    <>
      <div>Via Prop drilling : {count}</div>
      <br />
      <div>Via context : {hookValue}</div>

      <h2>Using consumer component</h2>
      <MyCountContext.Consumer>
        {(value) => <p>this is value from consumer component {value}</p>}
      </MyCountContext.Consumer>
    </>
  );
};

export default GrandChild;

// useContext hook to get the value of the context provider.
// don't use consumer component i don't like the sytax of it.
