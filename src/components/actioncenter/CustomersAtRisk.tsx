
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Send } from "lucide-react";

const customers = [
  { 
    id: 1, 
    name: 'Oceanul Indian', 
    type: 'Restaurant', 
    noOrderFor: '3 Months' 
  },
  { 
    id: 2, 
    name: 'Bun Bun Food', 
    type: 'Restaurant', 
    noOrderFor: '3 Months' 
  },
  { 
    id: 3, 
    name: 'Phoenicia', 
    type: 'Restaurant', 
    noOrderFor: '3 Months' 
  },
  { 
    id: 4, 
    name: 'Click', 
    type: 'Restaurant', 
    noOrderFor: '3 Months' 
  },
  { 
    id: 5, 
    name: 'Profi', 
    type: 'Restaurant', 
    noOrderFor: '3 Months' 
  }
];

export function CustomersAtRisk() {
  return (
    <Card className="bg-slate-800/40 border-slate-700 text-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">CUSTOMERS AT RISK</CardTitle>
        <div className="flex gap-2 mt-3">
          <Button variant="outline" size="sm" className="border-slate-600 bg-slate-700/50 hover:bg-slate-700 text-white flex gap-2">
            <Send className="h-4 w-4" />
            <span>Send Reminder</span>
          </Button>
          <Button variant="outline" size="sm" className="border-slate-600 bg-slate-700/50 hover:bg-slate-700 text-white flex gap-2">
            <Bell className="h-4 w-4" />
            <span>Alert Sales</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {customers.map((customer) => (
            <div key={customer.id} className="flex items-center justify-between border-b border-slate-700 pb-4">
              <div className="flex items-center gap-4">
                <div className="bg-slate-700 p-2 rounded-md">
                  {customer.name === 'Oceanul Indian' || customer.name === 'Profi' ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21L3 21L3 3L21 3L21 21Z" stroke="#4CAF50" strokeWidth="2"/>
                      <path d="M16 11L16 17" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 8L12 17" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M8 14L8 17" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ) : customer.name === 'Bun Bun Food' || customer.name === 'Phoenicia' ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2Z" stroke="#9333EA" strokeWidth="2"/>
                      <path d="M7.5 15.5C7.5 14.8096 7.95459 14.229 8.57463 14.0215C8.88171 13.9093 9.22293 13.85 9.58333 13.85C9.94374 13.85 10.285 13.9093 10.592 14.0215C11.212 14.229 11.6667 14.8096 11.6667 15.5C11.6667 16.1904 11.212 16.771 10.592 16.9785C10.285 17.0907 9.94374 17.15 9.58333 17.15C9.22293 17.15 8.88171 17.0907 8.57463 16.9785C7.95459 16.771 7.5 16.1904 7.5 15.5Z" stroke="#9333EA" strokeWidth="2"/>
                      <path d="M12.5 15.5C12.5 14.8096 12.9546 14.229 13.5746 14.0215C13.8817 13.9093 14.2229 13.85 14.5833 13.85C14.9437 13.85 15.285 13.9093 15.592 14.0215C16.2121 14.229 16.6667 14.8096 16.6667 15.5C16.6667 16.1904 16.2121 16.771 15.592 16.9785C15.285 17.0907 14.9437 17.15 14.5833 17.15C14.2229 17.15 13.8817 17.0907 13.5746 16.9785C12.9546 16.771 12.5 16.1904 12.5 15.5Z" stroke="#9333EA" strokeWidth="2"/>
                      <path d="M10 9.5C10 8.80964 10.4546 8.22904 11.0746 8.02148C11.3817 7.90934 11.7229 7.85 12.0833 7.85C12.4437 7.85 12.785 7.90934 13.092 8.02148C13.7121 8.22904 14.1667 8.80964 14.1667 9.5C14.1667 10.1904 13.7121 10.771 13.092 10.9785C12.785 11.0907 12.4437 11.15 12.0833 11.15C11.7229 11.15 11.3817 11.0907 11.0746 10.9785C10.4546 10.771 10 10.1904 10 9.5Z" stroke="#9333EA" strokeWidth="2"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V7C21 8.10457 20.1046 9 19 9H5C3.89543 9 3 8.10457 3 7V5Z" stroke="#F59E0B" strokeWidth="2"/>
                      <path d="M3 13C3 11.8954 3.89543 11 5 11H19C20.1046 11 21 11.8954 21 13V15C21 16.1046 20.1046 17 19 17H5C3.89543 17 3 16.1046 3 15V13Z" stroke="#F59E0B" strokeWidth="2"/>
                      <path d="M3 21C3 19.8954 3.89543 19 5 19H19C20.1046 19 21 19.8954 21 21V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V21Z" stroke="#F59E0B" strokeWidth="2"/>
                    </svg>
                  )}
                </div>
                <div>
                  <div className="font-medium">{customer.name}</div>
                  <div className="text-gray-400 text-sm">{customer.type}</div>
                  <div className="text-red-400 text-xs">No Order For: {customer.noOrderFor}</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-slate-600 bg-slate-700/50 hover:bg-slate-700 text-white">
                  <Send className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-slate-600 bg-slate-700/50 hover:bg-slate-700 text-white">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
