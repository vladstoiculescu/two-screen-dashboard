
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DeliveriesChart } from "@/components/dashboard/DeliveriesChart";
import { DeliveryDatesTable } from "@/components/dashboard/DeliveryDatesTable";
import { ProductsChart } from "@/components/dashboard/ProductsChart";
import { MetricsCards } from "@/components/dashboard/MetricsCards";
import { Filters } from "@/components/common/Filters";

const dateFilters = [
  {
    label: "Date Range",
    options: [
      { value: "01.01-01.03", label: "01.01-01.03" },
      { value: "01.03-01.06", label: "01.03-01.06" },
      { value: "01.06-01.09", label: "01.06-01.09" },
    ],
    defaultValue: "01.01-01.03",
  },
];

const frequencyFilters = [
  {
    label: "Frequency",
    options: [
      { value: "daily", label: "Daily" },
      { value: "weekly", label: "Weekly" },
      { value: "monthly", label: "Monthly" },
    ],
    defaultValue: "weekly",
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

export default function Dashboard() {
  const [sliderValue, setSliderValue] = useState<number[]>([0]);

  return (
    <DashboardLayout>
      <div className="space-y-6 w-full">
        <div>
          <Card className="bg-slate-800/40 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg font-medium">ACTUAL VS. PREDICTED DELIVERIES</CardTitle>
            </CardHeader>
            <CardContent>
              <Filters filters={[...dateFilters, ...frequencyFilters, ...clientFilters]} />
              
              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="perfectly-matching" />
                  <label htmlFor="perfectly-matching" className="text-gray-300 text-sm">
                    Perfectly Matching
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="approximated-deliveries" defaultChecked />
                  <label htmlFor="approximated-deliveries" className="text-gray-300 text-sm">
                    Approximated Deliveries
                  </label>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-gray-300 text-sm mb-2">Interval of Approximation</div>
                <div className="flex items-center space-x-2">
                  <div className="text-gray-400 text-sm">-0.5%</div>
                  <Slider
                    value={sliderValue}
                    max={100}
                    step={1}
                    className="flex-1"
                    onValueChange={setSliderValue}
                  />
                  <div className="text-gray-400 text-sm">+0.5%</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                  <label className="text-gray-300 text-sm">
                    Actual Deliveries
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <label className="text-gray-300 text-sm">
                    Predicted Deliveries
                  </label>
                </div>
              </div>
              
              <DeliveriesChart />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-800/40 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg font-medium">DELIVERY DATES</CardTitle>
            </CardHeader>
            <CardContent>
              <DeliveryDatesTable />
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg font-medium">DELIVERED PRODUCTS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                  <label className="text-gray-300 text-sm">
                    Actual
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <label className="text-gray-300 text-sm">
                    Predicted
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <label className="text-gray-300 text-sm">
                    High Difference
                  </label>
                </div>
              </div>
              <ProductsChart />
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-800/40 border-slate-700 text-white">
          <CardContent className="p-6">
            <MetricsCards />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
