export default function SignalCard({ ticker, name, confidence, price, reason }) {
  return (
    <div className="p-4 bg-gray-800 rounded-2xl shadow-md text-white space-y-1">
      <div className="text-lg font-bold">{ticker}</div>
      <div className="text-sm text-gray-400">{name}</div>
      <div className="text-sm mt-1">{reason}</div>
      <div className="mt-2 flex justify-between text-sm">
        <span className="text-green-400">${price}</span>
        <span className="text-purple-400">KONFIDENS: {confidence}%</span>
      </div>
    </div>
  );
}
