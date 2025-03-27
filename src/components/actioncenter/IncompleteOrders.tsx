
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Send } from "lucide-react";

const orders = [
  { 
    id: 1, 
    orderNumber: '#3435',
    products: [
      { name: 'Chifla Kaiser', quantity: '30 pcs' },
      { name: 'Chifla Neagra', quantity: '20 pcs' }
    ]
  },
  { 
    id: 2, 
    orderNumber: '#3535',
    products: [
      { name: 'Somon Fume', quantity: '15 pcs' },
      { name: 'Chifla Neagra', quantity: '20 pcs' }
    ]
  },
  { 
    id: 3, 
    orderNumber: '#3536',
    products: [
      { name: 'Chifla Kaiser', quantity: '30 pcs' },
      { name: 'Cartofi Dulci', quantity: '20 pcs' }
    ]
  },
  { 
    id: 4, 
    orderNumber: '#3536',
    products: [
      { name: 'Chifla Kaiser', quantity: '30 pcs' },
      { name: 'Chifla Neagra', quantity: '20 pcs' }
    ]
  },
  { 
    id: 5, 
    orderNumber: '#3536',
    products: [
      { name: 'Cartofi Dulci', quantity: '30 pcs' },
      { name: 'Nuggets Pui', quantity: '10 pcs' }
    ]
  }
];

export function IncompleteOrders() {
  return (
    <Card className="bg-slate-800/40 border-slate-700 text-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">PLACED BUT INCOMPLETE</CardTitle>
        <div className="flex gap-2 mt-3">
          <Button variant="outline" size="sm" className="border-slate-600 bg-slate-700/50 hover:bg-slate-700 text-white flex gap-2">
            <Send className="h-4 w-4" />
            <span>Marketing Email</span>
          </Button>
          <Button variant="outline" size="sm" className="border-slate-600 bg-slate-700/50 hover:bg-slate-700 text-white flex gap-2">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Suggest</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between border-b border-slate-700 pb-4">
              <div className="flex items-center gap-4">
                <div className="bg-slate-700 p-2 rounded-md">
                  {order.id % 2 === 0 ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2Z" stroke="#F59E0B" strokeWidth="2"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 7.5H16.5M7.5 12H16.5M7.5 16.5H12" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#4CAF50" strokeWidth="2"/>
                    </svg>
                  )}
                </div>
                <div>
                  <div className="font-medium">Order {order.orderNumber}</div>
                  <div className="text-red-400 text-xs">Predicted, but Missing</div>
                  <div className="space-y-1 mt-1">
                    {order.products.map((product, idx) => (
                      <div key={idx} className="text-gray-400 text-xs">{product.name} - {product.quantity}</div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-slate-600 bg-slate-700/50 hover:bg-slate-700 text-white">
                  <Send className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-slate-600 bg-slate-700/50 hover:bg-slate-700 text-white">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
