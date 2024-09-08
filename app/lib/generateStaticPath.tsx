'use client';

import { useEffect, useState } from 'react';
import { Car, CarMakes } from '../utils/Types';
import { carFetcher } from './dataFetcher';

interface Props {
  cars: CarMakes[];
  year: number;
}

export function generateStaticPath({ cars, year }: Props) {
  return cars.map(car => ({ MakeId: car.MakeId, year }));
}

export default function CarComponentPage(params: {
  MakeId: number;
  year: number;
}) {
  const { MakeId } = params;
  const { year } = params;

  const [carsList, setCarsList] = useState<Car[]>([]);

  useEffect(() => {
    carFetcher({ makeId: MakeId, year })
      .then(tempCars => {
        if (tempCars) {
          setCarsList(tempCars.Results);
        }
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, [MakeId, year]);

  return (
    <div className="container mx-auto">
      {carsList.map((car, index) => (
        <div key={index}>
          <div>{`${car.Make_Name} ${car.Model_Name}`}</div>
        </div>
      ))}
    </div>
  );
}
