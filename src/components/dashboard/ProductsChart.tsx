
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { product: 'Mazare', actual: 150, predicted: 140, difference: 0 },
  { product: 'Somon File', actual: 100, predicted: 90, difference: 5 },
  { product: 'Cordon Bleu', actual: 120, predicted: 125, difference: 0 },
  { product: 'Edenia Fasole', actual: 80, predicted: 85, difference: 0 },
  { product: 'Mix Mexican', actual: 110, predicted: 115, difference: 20 },
  { product: 'Cartofi Dulci', actual: 90, predicted: 95, difference: 0 },
  { product: 'Farm Frites', actual: 160, predicted: 155, difference: 0 },
];

export function ProductsChart() {
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
          <XAxis dataKey="product" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} />
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
          <Bar dataKey="difference" name="High Difference" fill="#f87171" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
