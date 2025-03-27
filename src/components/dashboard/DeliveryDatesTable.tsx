
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const clients = [
  { name: 'SINTRA CAFE SRL', actual: '02.03.2025', predicted: '02.03.2025', difference: '0 Days' },
  { name: 'OCEANUL INDIAN SA', actual: '02.03.2025', predicted: '02.03.2025', difference: '0 Days' },
  { name: 'SC PROFI SRL', actual: '03.03.2025', predicted: '03.03.2025', difference: '0 Days' },
  { name: 'SC BRIO FOOD SRL', actual: '03.03.2025', predicted: '03.03.2025', difference: '0 Days' },
  { name: 'ANGI IMPORT EXPORT', actual: '04.03.2025', predicted: '03.03.2025', difference: '+1 Day' },
  { name: 'DISITOR DONER SRL', actual: '04.03.2025', predicted: '05.03.2025', difference: '0 Days' },
  { name: 'LA COCOS SUPERMARKET', actual: '04.03.2025', predicted: '04.03.2025', difference: '0 Days' },
  { name: 'BUNBUN FOOD', actual: '04.03.2025', predicted: '04.03.2025', difference: '0 Days' },
  { name: 'SC MOL ROMANIA', actual: '05.03.2025', predicted: '05.03.2025', difference: '0 Days' },
  { name: 'ANGI IMPORT EXPORT', actual: '05.03.2025', predicted: '06.03.2025', difference: '+1 Day' },
];

export function DeliveryDatesTable() {
  return (
    <div className="w-full overflow-auto">
      <Table className="border-collapse w-full">
        <TableHeader>
          <TableRow className="bg-slate-800/50">
            <TableHead className="text-left text-gray-300 font-medium">CLIENTS</TableHead>
            <TableHead className="text-gray-300 font-medium">ACTUAL</TableHead>
            <TableHead className="text-gray-300 font-medium">PREDICTED</TableHead>
            <TableHead className="text-gray-300 font-medium">DIFFERENCE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client, index) => (
            <TableRow key={index} className="border-b border-slate-700">
              <TableCell className="text-white py-2">{client.name}</TableCell>
              <TableCell className="text-white py-2">{client.actual}</TableCell>
              <TableCell className="text-white py-2">{client.predicted}</TableCell>
              <TableCell className={`py-2 ${client.difference.includes('+') ? 'text-red-400' : 'text-white'}`}>
                {client.difference}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
