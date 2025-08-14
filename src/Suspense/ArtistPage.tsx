import { Suspense } from "react";
import Albums from "./Albums";

type Props = {
  name: string;
  slug: string;
};

const ArtistPage = ({ name, slug }: Props) => {
  return (
    <>
      <h1>{name}</h1>
      <Suspense fallback={<Loading />}>
        <Albums slug={slug} />
      </Suspense>
    </>
  );
};

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default ArtistPage;
