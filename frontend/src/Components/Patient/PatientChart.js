import React, { PureComponent } from 'react';
import { PieChart,
   Pie, Cell, BarChart,
   Bar, XAxis, YAxis,
    CartesianGrid, Tooltip, Legend }
    from 'recharts';
import '../App.css'


const meds = [
  {name: "xanax", value: 2000},
  {name: "tyleno3", value: 2000},
  {name: "Morphin", value: 700},
  {name: "Azithromycin", value: 1000},
]

const hospitalVisits = [
  {name: "2017", visits: 23},
  {name: "2018", visits: 13},
  {name: "2019", visits: 18},
  {name: "2020", visits: 100},
  {name: "2021", visits: 2},
]


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (
      <div className="pie_bar_container">

        <div className="pieChart">
        <PieChart width={400} height={400}>
          <Pie
            data={meds}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {meds.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>

        <div className="barChart">
          <BarChart
            width={500}
            height={300}
            data={hospitalVisits}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="visits" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </div>
      </div>

    );
  }
}
