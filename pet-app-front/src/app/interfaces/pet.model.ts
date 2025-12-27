export interface Pet {
  id: number;
  name: string;
  species: 'Dog' | 'Cat' | string;
  breed: string;
  age: number;
  comidasPermitidas?: string[]; 
  calendarioVacunas?: any[];
}