export type AutobazarType = {
  id: number;
  brand: string;
  model: string;
  kilometers: number;
  price: number;
  engine: string;
};

export const autobazar: Array<AutobazarType> = [
  {
    id: 1,
    brand: "Škoda",
    model: "Fabia",
    kilometers: 167000,
    price: 150000,
    engine: "Benzín",
  },
  {
    id: 2,
    brand: "Tesla",
    model: "Model S",
    kilometers: 146000,
    price: 1449000,
    engine: "Elektro",
  },
  {
    id: 3,
    brand: "Škoda",
    model: "Octavia",
    kilometers: 247000,
    price: 119000,
    engine: "Nafta",
  },
  {
    id: 4,
    brand: "Škoda",
    model: "Enyaq iV",
    kilometers: 685,
    price: 1729000,
    engine: "Elektro",
  },
  {
    id: 5,
    brand: "Tesla",
    model: "Model X",
    kilometers: 97000,
    price: 1399000,
    engine: "Elektro",
  },
];
