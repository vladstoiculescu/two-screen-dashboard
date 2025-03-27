
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { CustomerMetrics } from "@/components/actioncenter/CustomerMetrics";
import { CustomersAtRisk } from "@/components/actioncenter/CustomersAtRisk";
import { UnplacedOrders } from "@/components/actioncenter/UnplacedOrders";
import { IncompleteOrders } from "@/components/actioncenter/IncompleteOrders";
import { AnomaliesChart } from "@/components/actioncenter/AnomaliesChart";
import { Filters } from "@/components/common/Filters";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const timeFrameFilters = [
  {
    label: "Monthly",
    options: [
      { value: "daily", label: "Daily" },
      { value: "weekly", label: "Weekly" },
      { value: "monthly", label: "Monthly" },
      { value: "quarterly", label: "Quarterly" },
    ],
    defaultValue: "monthly",
  },
];

const clientFilters = [
  {
    label: "All Clients",
    options: [
      { value: "all", label: "All Clients" },
      { value: "active", label: "Active Clients" },
      { value: "inactive", label: "Inactive Clients" },
    ],
    defaultValue: "all",
  },
];

const anomalyData = [
  { client: 'SINTRA CAFE SRL', change: 'Decrease', percent: '-0.2%' },
  { client: 'OCEANUL INDIAN SA', change: 'Increase', percent: '+0.3%' },
  { client: 'SC PROFI SRL', change: 'Decrease', percent: '-0.2%' },
  { client: 'SC BRIO FOOD SRL', change: 'Increase', percent: '+0.5%' },
  { client: 'ANGI IMPORT EXPORT', change: 'Increase', percent: '+0.5%' },
  { client: 'DISITOR DONER SRL', change: 'Increase', percent: '+0.7%' },
  { client: 'LA COCOS SUPERMARKET', change: 'Increase', percent: '+0.8%' },
  { client: 'BUNBUN FOOD', change: 'Increase', percent: '+0.9%' },
  { client: 'SC MOL ROMANIA', change: 'Decrease', percent: '-0.2%' },
  { client: 'SC BRIO FOOD SRL', change: 'Increase', percent: '+0.2%' },
  { client: 'ANGI IMPORT EXPORT', change: 'Decrease', percent: '-0.2%' },
];

export default function ActionCenter() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-bold text-white mb-4">ACTIVE CUSTOMERS</h1>
          <Filters filters={[...timeFrameFilters, ...clientFilters]} />
          <CustomerMetrics />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UnplacedOrders />
          <IncompleteOrders />
          <CustomersAtRisk />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-800/40 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg font-medium">ORDER ANOMALIES PER CLIENT</CardTitle>
              <Filters filters={[
                {
                  label: "SINTRA CAFE SRL",
                  options: [
                    { value: "sintra", label: "SINTRA CAFE SRL" },
                    { value: "oceanul", label: "OCEANUL INDIAN SA" },
                    { value: "profi", label: "SC PROFI SRL" },
                  ],
                  defaultValue: "sintra",
                },
                {
                  label: "All Categories",
                  options: [
                    { value: "all", label: "All Categories" },
                    { value: "food", label: "Food" },
                    { value: "beverages", label: "Beverages" },
                  ],
                  defaultValue: "all",
                },
                {
                  label: "All Products",
                  options: [
                    { value: "all", label: "All Products" },
                    { value: "bread", label: "Bread" },
                    { value: "meat", label: "Meat" },
                  ],
                  defaultValue: "all",
                },
                {
                  label: "Weekly",
                  options: [
                    { value: "daily", label: "Daily" },
                    { value: "weekly", label: "Weekly" },
                    { value: "monthly", label: "Monthly" },
                  ],
                  defaultValue: "weekly",
                }
              ]} />
            </CardHeader>
            <CardContent>
              <AnomaliesChart />
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg font-medium">ORDER ANOMALIES PER PRODUCT</CardTitle>
              <Filters filters={[
                {
                  label: "Inghetata Corso",
                  options: [
                    { value: "corso", label: "Inghetata Corso" },
                    { value: "mazare", label: "Mazare" },
                    { value: "cartofi", label: "Cartofi" },
                  ],
                  defaultValue: "corso",
                },
                {
                  label: "Weekly",
                  options: [
                    { value: "daily", label: "Daily" },
                    { value: "weekly", label: "Weekly" },
                    { value: "monthly", label: "Monthly" },
                  ],
                  defaultValue: "weekly",
                }
              ]} />
            </CardHeader>
            <CardContent>
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="text-gray-300">CLIENT</TableHead>
                    <TableHead className="text-gray-300">CHANGE</TableHead>
                    <TableHead className="text-right text-gray-300">%</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {anomalyData.map((row, index) => (
                    <TableRow key={index} className="hover:bg-slate-800/50 border-b border-slate-700">
                      <TableCell className="text-white">{row.client}</TableCell>
                      <TableCell className="text-white">{row.change}</TableCell>
                      <TableCell 
                        className={`text-right ${
                          row.percent.includes('+') ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        {row.percent}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
