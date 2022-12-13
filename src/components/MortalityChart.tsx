import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    year: 2022,
    úmrtí: 59661,
  },
  {
    year: 2021,
    úmrtí: 139891,
  },
  {
    year: 2020,
    úmrtí: 129289,
  },
  {
    year: 2019,
    úmrtí: 112362,
  },
  {
    year: 2018,
    úmrtí: 112920,
  },
];

type Props = {
  numOfYears: number;
};

const MortalityChart = ({ numOfYears }: Props) => {
  const dataFinal = data.filter((data) => data.year > 2022 - numOfYears);
  return (
    <div className="bg-light">
      <h2>Zemřelí</h2>
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
        <Bar dataKey="úmrtí" fill="#404258" />
      </BarChart>
    </div>
  );
};

export default MortalityChart;
