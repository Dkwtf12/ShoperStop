import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      {/* Header */}
      <header className="bg-white shadow p-4">
        <h1 className="text-3xl font-bold text-center">👋 Welcome to ShoperStop.store</h1>
        <p className="text-center text-sm text-gray-600">
          India’s Trusted Digital Deals Store
        </p>
      </header>

      {/* Main Content */}
      <main className="p-6">

        {/* Services We Provide */}
        <section className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">🎯 Our Digital Services</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>OTT Subscriptions:</strong> Netflix, Amazon Prime, Disney+ Hotstar & more</li>
            <li><strong>Music Platforms:</strong> Spotify Premium, YouTube Music</li>
            <li><strong>VPN Services:</strong> NordVPN, Surfshark, ExpressVPN</li>
            <li><strong>AI Tools:</strong> ChatGPT Plus, Canva Pro, Grammarly Premium</li>
            <li><strong>Telegram Premium:</strong> Fast delivery via username or mobile</li>
            <li><strong>Combo Deals:</strong> Save more with bundled offers</li>
            <li><strong>Custom Orders:</strong> Need something else? Message us on Telegram!</li>
          </ul>
        </section>

        {/* Customer Reviews */}
        <section className="my-10 text-center">
          <h3 className="text-lg font-bold mb-4">🌟 What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow p-4 rounded-xl text-left">
              <p className="text-gray-800 italic">"Bought Netflix + Prime combo and got it within 5 minutes. Super fast and genuine!"</p>
              <p className="mt-2 text-sm text-gray-500">— Rahul, Mumbai</p>
            </div>
            <div className="bg-white shadow p-4 rounded-xl text-left">
              <p className="text-gray-800 italic">"Very helpful and quick delivery. Telegram Premium working perfectly!"</p>
              <p className="mt-2 text-sm text-gray-500">— Ayesha, Delhi</p>
            </div>
            <div className="bg-white shadow p-4 rounded-xl text-left">
              <p className="text-gray-800 italic">"This is the 3rd time I'm buying. Trusted service for OTT deals. Thanks!"</p>
              <p className="mt-2 text-sm text-gray-500">— Karan, Bangalore</p>
            </div>
          </div>
        </section>

        {/* Selling Proofs Button */}
        <section className="my-10 text-center">
          <a
            href="https://t.me/shoperstopvouches"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            📲 Check Selling Proofs on Telegram
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow text-center p-4 mt-6">
        <p className="text-sm text-gray-500">© 2025 ShoperStop.store | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
