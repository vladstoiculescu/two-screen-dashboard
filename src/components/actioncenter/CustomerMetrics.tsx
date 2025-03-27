
import { Card, CardContent } from "@/components/ui/card";

export function CustomerMetrics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="bg-slate-800/40 border-slate-700 text-white overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col">
            <div className="text-lg font-medium text-gray-400 mb-4">Active Customers:</div>
            <div className="flex justify-between items-baseline">
              <div className="text-3xl font-bold">380</div>
              <div className="text-green-400 text-sm">
                <span className="font-medium">+5%</span>
                <span className="text-gray-400 ml-2">Compared to Previous</span>
              </div>
            </div>
            <div className="flex items-baseline mt-2">
              <div className="text-lg font-medium">10</div>
              <div className="text-gray-400 ml-2">New Customers</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-slate-800/40 border-slate-700 text-white overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col">
            <div className="text-lg font-medium text-gray-400 mb-4">Total Number of Orders</div>
            <div className="text-3xl font-bold">5000</div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <div className="text-lg font-medium">20</div>
                <div className="text-gray-400">Customers at Risk</div>
              </div>
              <div>
                <div className="text-lg font-medium">50</div>
                <div className="text-gray-400">Orders at Risk</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-slate-800/40 border-slate-700 text-white overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col">
            <div className="text-lg font-medium text-gray-400 mb-4">Total Order Anomalies</div>
            <div className="text-3xl font-bold">200</div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <div className="text-lg font-medium text-green-400">180</div>
                <div className="text-gray-400">Positive Anomalies</div>
              </div>
              <div>
                <div className="text-lg font-medium text-red-400">20</div>
                <div className="text-gray-400">Negative Anomalies</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
