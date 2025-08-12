import GrandChild from "./GrandChild";

type Props = {
  count: number;
};

const Child = ({ count }: Props) => {
  return <GrandChild count={count} />;
};

export default Child;
