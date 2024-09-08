'use client';

import { Suspense, useEffect, useState } from 'react';
import { carMakesFetcher } from './lib/dataFetcher';
import Link from 'next/link';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';
import { CarMakes } from './utils/Types';
import { Dropdown } from './components/Dropdown/Dropdown';

export default function Filter() {
  const [carMakesList, setCarMakesList] = useState<CarMakes[]>([]);
  const [selectedMakes, setSelectedMakes] = useState<CarMakes | undefined>();
  const [selectedYear, setSelectedYear] = useState<number | undefined>();
  const [yearsList, setYearsList] = useState<number[]>();

  useEffect(() => {
    carMakesFetcher('GetMakesForVehicleType/car?format=json')
      .then(carMakes => {
        if (carMakes) {
          setCarMakesList(
            carMakes.Results.sort((a, b) =>
              a.MakeName.localeCompare(b.MakeName)
            )
          );
        }
      })
      .catch(error => {
        console.error('Error fetching carsMakes:', error);
      });

    const date = new Date().getFullYear();
    const tempDateArr = [];
    for (let i = 2015; i <= date; i++) {
      tempDateArr.push(i);
    }

    setYearsList(tempDateArr);
  }, []);
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Dropdown
            iterableArray={carMakesList}
            initialValue={selectedMakes}
            stateSetterCars={setSelectedMakes}
          />
          <Dropdown
            iterableArray={yearsList}
            initialValue={selectedYear}
            stateSetterYears={setSelectedYear}
          />
          {
            <button
              disabled={
                selectedYear !== undefined && selectedMakes !== undefined
              }
            >
              <Link href={`/result/${selectedMakes?.MakeId}/${selectedYear}`}>
                Next
              </Link>
            </button>
          }
        </div>
      </div>
    </Suspense>
  );
}
