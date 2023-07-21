import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data1 = [
  {
    name: "2019",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2020",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2021",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "2022",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  }
];

const data2 = [
    {
      name: "2019",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2020",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "2021",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "2022",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    }
  ];


function Admin1() {
  return (
    <>
      <div className="container">
        <div className=" container">
          <div className=" container">
            <LineChart
              width={900}
              height={300}
              data={data1}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Admin1;
