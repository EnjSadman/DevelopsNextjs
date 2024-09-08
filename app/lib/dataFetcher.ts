import { Car, CarMakes } from "../utils/Types";

interface Params {
  makeId: number,
  year: number
}

export async function carMakesFetcher(params : string) {
  if (process.env.NEXT_PUBLIC_BASE_URL !== undefined) {

      const carMakes : CarMakes[] = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${params}`)
      .then(
        (result) => result.json(),
        (error) => { throw new Error(error) }
      );

      return carMakes
    

  } else {
    throw new Error("BASE_URL is undefined");
  }
}

export async function carFetcher(params : Params) {
  if (process.env.NEXT_PUBLIC_BASE_URL !== undefined) {
    const cars : Car[] = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}GetModelsForMakeIdYear/makeId/${params.makeId}/modelyear/${params.year}?format=json`)
      .then(
        (result) => result.json(),
        (error) => { throw new Error(error) }
      );

      return cars;
  }
}