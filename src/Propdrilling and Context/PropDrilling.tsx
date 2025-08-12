import Child from "./Child";

type Props = {
  count: number;
};

const PropDrilling = ({ count }: Props) => {
  return <Child count={count} />;
};

export default PropDrilling;

// Context API : share reactive data anywhere in the component tree.
// Because react enforces one way data flow. where props can only be passed to their direct children.
// You might endup in situation where we need to pass prop to futher down then direct children. this leads to what we call prop drilling

// **** context api allows you to place data somewhere in the component tree. then all children can have access that data without needing to access it via props.
// context is often placed at global level to provide a data that could be shared everywhere. example : like a theme or user authentication state.
// any component that consumes the data would be re-rendered. whenever that data changes
