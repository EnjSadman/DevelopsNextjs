"use client"

import { useEffect, useState } from "react";
import { Car, CarMakes } from "../utils/Types";
import { carFetcher } from "./dataFetcher";

interface Props {
  cars: CarMakes[],
  year: number,
}

export async function generateStaticPath({ cars, year } : Props) {
  return cars.map(car => ({MakeId : car.MakeId, year}))
}

export default async function CarComponentPage( params : {MakeId : number, year: number}) {
  const { MakeId } = params;
  const { year } = params;

  const [carsList, setCarsList] = useState<Car[]>([]);

  useEffect(() => {
    carFetcher({makeId: MakeId, year})
      .then((tempCars) => {
        if (tempCars) {
          setCarsList(tempCars)
        }
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
      });
  }, [])

  return (
    <div>
      {
        carsList.map(car => (
          <div>
            <div>
              {car.Make_Name}
            </div>
            <div>
              {car.Model_Name}
            </div>
          </div>
        ))
      }
    </div>
  )
}