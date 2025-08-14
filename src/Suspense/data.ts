export type AlbumDto = {
  id: number;
  title: string;
  year: number;
};

const cache = new Map<string, Promise<AlbumDto[]>>();

const fetchData = (url: string): Promise<AlbumDto[]> => {
  if (!cache.has(url)) {
    cache.set(url, getAlbums());
  }
  return cache.get(url)!; // using non-null asserstion (!) because we know it cannot be undefined. we just set it above.
};

async function getAlbums(): Promise<AlbumDto[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 10000);
  });

  const data: AlbumDto[] = [
    {
      id: 13,
      title: "Let It Be",
      year: 1970,
    },
    {
      id: 12,
      title: "Abbey Road",
      year: 1969,
    },
    {
      id: 11,
      title: "Yellow Submarine",
      year: 1969,
    },
    {
      id: 10,
      title: "The Beatles",
      year: 1968,
    },
    {
      id: 9,
      title: "Magical Mystery Tour",
      year: 1967,
    },
    {
      id: 8,
      title: "Sgt. Pepper's Lonely Hearts Club Band",
      year: 1967,
    },
    {
      id: 7,
      title: "Revolver",
      year: 1966,
    },
    {
      id: 6,
      title: "Rubber Soul",
      year: 1965,
    },
    {
      id: 5,
      title: "Help!",
      year: 1965,
    },
    {
      id: 4,
      title: "Beatles For Sale",
      year: 1964,
    },
    {
      id: 3,
      title: "A Hard Day's Night",
      year: 1964,
    },
    {
      id: 2,
      title: "With The Beatles",
      year: 1963,
    },
    {
      id: 1,
      title: "Please Please Me",
      year: 1963,
    },
  ];

  return data;
}

export default fetchData;
