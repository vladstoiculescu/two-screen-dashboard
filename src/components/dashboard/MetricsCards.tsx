
export function MetricsCards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-slate-800/40 p-4 rounded-lg">
        <div className="text-xl font-bold text-blue-400">94.4%</div>
        <div className="text-sm text-gray-400">PREDICTION ACCURACY</div>
      </div>
      <div className="bg-slate-800/40 p-4 rounded-lg">
        <div className="text-xl font-bold text-green-400">+99.9%</div>
        <div className="text-sm text-gray-400">DATA HEALTH</div>
      </div>
      <div className="bg-slate-800/40 p-4 rounded-lg">
        <div className="text-xl font-bold text-yellow-400">28.03</div>
        <div className="text-sm text-gray-400">DATABSE UPDATE</div>
      </div>
      <div className="bg-slate-800/40 p-4 rounded-lg">
        <div className="text-xl font-bold text-blue-400">32</div>
        <div className="text-sm text-gray-400">NUMBER OF DATA SOURCES</div>
      </div>
      <div className="bg-slate-800/40 p-4 rounded-lg">
        <div className="text-xl font-bold text-green-400">+0.4%</div>
        <div className="text-sm text-gray-400">IMPROVEMENT SINCE UPDATE</div>
      </div>
      <div className="bg-slate-800/40 p-4 rounded-lg">
        <div className="text-xl font-bold text-yellow-400">22.03</div>
        <div className="text-sm text-gray-400">LATEST MODEL UPDATE</div>
      </div>
      <div className="bg-slate-800/40 p-4 rounded-lg">
        <div className="text-xl font-bold text-white">0.92</div>
        <div className="text-sm text-gray-400">LATEST VERSION</div>
      </div>
    </div>
  );
}
