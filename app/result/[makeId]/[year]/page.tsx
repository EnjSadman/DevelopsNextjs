'use client';
import CarComponentPage from '../../../lib/generateStaticPath';

export default function Page({
  params,
}: {
  params: { makeId: number; year: number };
}) {
  return <CarComponentPage MakeId={params.makeId} year={params.year} />;
}
