
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'W1', actual: 190, predicted: 180 },
  { week: 'W2', actual: 150, predicted: 155 },
  { week: 'W3', actual: 120, predicted: 130 },
  { week: 'W4', actual: 180, predicted: 190 },
  { week: 'W5', actual: 140, predicted: 135 },
  { week: 'W6', actual: 130, predicted: 140 },
  { week: 'W7', actual: 210, predicted: 220 },
  { week: 'W8', actual: 220, predicted: 230 },
];

export function DeliveriesChart() {
  return (
    <div className="w-full h-full">
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
          <Bar dataKey="actual" name="Actual Deliveries" fill="#93c5fd" radius={[4, 4, 0, 0]} />
          <Bar dataKey="predicted" name="Predicted Deliveries" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
