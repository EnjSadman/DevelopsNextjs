import './styles.css';

import { CarMakes } from '@/app/utils/Types';
import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  iterableArray: number[] | CarMakes[] | undefined;
  initialValue: number | CarMakes | undefined;
  stateSetterCars?: Dispatch<SetStateAction<CarMakes | undefined>>;
  stateSetterYears?: Dispatch<SetStateAction<number | undefined>>;
}

export function Dropdown({
  iterableArray = [],
  initialValue,
  stateSetterCars,
  stateSetterYears,
}: Props) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  function dropdownCell(arg: CarMakes | number) {
    if (typeof arg === 'number') {
      return (
        <div className="cursor-pointer text-sm hover:underline">{arg}</div>
      );
    } else {
      return (
        <div className="cursor-pointer text-xs hover:underline">
          {arg.MakeName}
        </div>
      );
    }
  }
  return (
    <div className="dropdown relative">
      <div>
        <button
          className="bg-slate-700"
          onClick={() => {
            setDropdownVisible(!dropdownVisible);
          }}
        >
          {initialValue === undefined
            ? 'Click me'
            : typeof initialValue === 'number'
              ? initialValue
              : initialValue.MakeName}
        </button>
      </div>
      <div
        className={`visible-${dropdownVisible} grid-cols-6 gap-1 absolute container`}
      >
        {iterableArray.map((el, index) => (
          <div
            key={index}
            onClick={() => {
              if (stateSetterYears !== undefined && typeof el === 'number') {
                stateSetterYears(el);
              } else if (
                stateSetterCars !== undefined &&
                typeof el === 'object'
              ) {
                stateSetterCars(el);
              }
              setDropdownVisible(false);
            }}
          >
            {dropdownCell(el)}
          </div>
        ))}
      </div>
    </div>
  );
}
