export type CarMakes = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};

export type Car = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

export type CarResponse = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: Car[];
};
