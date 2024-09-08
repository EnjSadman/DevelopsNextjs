import { carFetcher } from './dataFetcher';

interface Params {
  makeId: number;
  year: number;
}

export async function getStaticProps(params: Params) {
  const car = await carFetcher({ makeId: params.makeId, year: params.year });

  return {
    props: {
      car,
    },
  };
}
