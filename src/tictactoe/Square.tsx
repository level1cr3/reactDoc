import styles from "./Game.module.css";

type Props = {
  value: string | null;
  onSquareClick: () => void;
  isHighlight: boolean;
};

// in Props react always passes the object so if you just do this value:string in parameter it won't be able to recive value.
const Square = ({ value, onSquareClick, isHighlight }: Props) => {
  return (
    <button
      className={styles.square}
      onClick={onSquareClick}
      style={isHighlight ? { backgroundColor: "green" } : {}}
    >
      {value}
    </button>
  );
};

export default Square;
