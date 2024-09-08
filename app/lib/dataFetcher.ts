import { CarMakes, CarResponse } from '../utils/Types';

interface Params {
  makeId: number;
  year: number;
}

interface CarMakesResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: CarMakes[];
}

export async function carMakesFetcher(params: string) {
  if (process.env.NEXT_PUBLIC_BASE_URL !== undefined) {
    const carMakes: CarMakesResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}${params}`
    ).then(
      result => result.json(),
      error => {
        throw new Error(error);
      }
    );

    return carMakes;
  } else {
    throw new Error('BASE_URL is undefined');
  }
}

export async function carFetcher(params: Params) {
  if (process.env.NEXT_PUBLIC_BASE_URL !== undefined) {
    const cars: CarResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}GetModelsForMakeIdYear/makeId/${params.makeId}/modelyear/${params.year}?format=json`
    ).then(
      result => result.json(),
      error => {
        throw new Error(error);
      }
    );

    return cars;
  }
}
