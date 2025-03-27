
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'Week 1', actual: 150, predicted: 140, anomaly: 0 },
  { week: 'Week 2', actual: 120, predicted: 130, anomaly: 0 },
  { week: 'Week 3', actual: 130, predicted: 120, anomaly: 0 },
  { week: 'Week 4', actual: 180, predicted: 170, anomaly: 0 },
  { week: 'Week 5', actual: 130, predicted: 120, anomaly: 0 },
  { week: 'Week 6', actual: 140, predicted: 130, anomaly: 0 },
  { week: 'Week 7', actual: 170, predicted: 150, anomaly: 40 },
];

export function AnomaliesChart() {
  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2a3444" />
          <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#2a3444', 
              borderColor: '#374151',
              color: 'white'
            }}
          />
          <Bar dataKey="actual" name="Actual" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="predicted" name="Predicted" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
          <Bar dataKey="anomaly" name="Anomaly" fill="#f87171" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
