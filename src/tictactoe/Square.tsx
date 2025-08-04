import styles from "./Game.module.css";

type Props = {
  value: string;
  onSquareClick: () => void;
};

// in Props react always passes the object so if you just do this value:string in parameter it won't be able to recive value.
const Square = ({ value, onSquareClick }: Props) => {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
