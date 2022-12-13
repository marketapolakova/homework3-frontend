import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    year: 2022,
    počet: 10525.7,
  },
  {
    year: 2021,
    počet: 10515.7,
  },
  {
    year: 2020,
    počet: 10701.8,
  },
  {
    year: 2019,
    počet: 10693.9,
  },
  {
    year: 2018,
    počet: 10649.8,
  },
];

type Props = {
  numOfYears: number;
};

const PopulationChart = ({ numOfYears }: Props) => {
  const dataFinal = data.filter((data) => data.year > 2022 - numOfYears);
  return (
    <div className="bg-light">
      <h2>Populace</h2>
      <BarChart
        width={400}
        height={300}
        data={dataFinal}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="počet" fill="#8D9EFF" />
      </BarChart>
    </div>
  );
};

export default PopulationChart;
