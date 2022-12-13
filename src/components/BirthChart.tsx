import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    year: 2022,
    narození: 50011,
  },
  {
    year: 2021,
    narození: 111793,
  },
  {
    year: 2020,
    narození: 110200,
  },
  {
    year: 2019,
    narození: 112231,
  },
  {
    year: 2018,
    narození: 114036,
  },
];

type Props = {
  numOfYears: number;
};

const BirthChart = ({ numOfYears }: Props) => {
  const dataFinal = data.filter((data) => data.year > 2022 - numOfYears);
  return (
    <div className="bg-light">
      <h2>Živě narození</h2>
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

        <Bar dataKey="narození" fill="#E97777" />
      </BarChart>
    </div>
  );
};

export default BirthChart;
