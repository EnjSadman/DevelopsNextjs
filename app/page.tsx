"use client"

import { Suspense, useEffect } from 'react';
import { carMakesFetcher } from './lib/dataFetcher';
import CarPage, { generateStaticPath } from './lib/generateStaticPath';
import Link from 'next/link';
import { LoadingScreen } from './components/LoadingScreen';

export default function Filter() {

  useEffect(() => {
    carMakesFetcher("GetMakesForVehicleType/car?format=json");
  }, [])
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div>
        {
          <Link href={`/result/${441}/${2020}`}>        
          123
          </Link>
        }
      </div>
    </Suspense>
  );
}
