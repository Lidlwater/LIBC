import Navbar from '../components/Navbar';
import SignalCard from '../components/SignalCard';
import PerformanceStats from '../components/PerformanceStats';


export default function Dashboard() {
return (
<div className="p-6">
<Navbar />
<h1 className="text-3xl mb-4">📈 Dashboard</h1>
<PerformanceStats />
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
<SignalCard ticker="MSFT" confidence={91} price={425.3} reason="Utbrott + hög volymökning" />
<SignalCard ticker="NVDA" confidence={88} price={145.2} reason="Buzz + AI-stöd" />
</div>
</div>
);
}
