import { use } from "react";
import fetchData from "./data";

type Props = {
  slug: string;
};

const Albums = ({ slug }: Props) => {
  const albums = use(fetchData(`/${slug}/albums`));
  return (
    <ul>
      {albums.map(({ id, title, year }) => (
        <li key={id}>
          {title} ({year})
        </li>
      ))}
    </ul>
  );
};

export default Albums;

// ### use
// use is a React API that lets you read the value of a resource like a Promise or context.
