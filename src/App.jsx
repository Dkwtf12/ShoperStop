import React from 'react';
import subscriptions from './data/subscriptions';

const App = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Hero Section */}
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold text-blue-700">👋 Welcome to ShoperStop.store</h1>
        <p className="mt-2 text-lg text-gray-600">India’s Trusted Digital Deals Store</p>
      </div>

      {/* Services Offered */}
      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">🚀 Our Bestselling Subscriptions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subscriptions.map((item, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-2xl p-4 border border-gray-200">
              <h3 className="text-xl font-bold text-purple-600">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.duration}</p>
              <p className="mt-2">
                <span className="line-through text-gray-400">{item.originalPrice}</span>
                <span className="text-green-600 font-semibold ml-2">{item.offerPrice}</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">{item.note}</p>
              <button className="mt-4 bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-700">
                📩 Message on Telegram
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Fake Reviews */}
      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">🧾 Customer Reviews</h2>
        <div className="space-y-4">
          <div className="bg-white shadow-sm p-4 border rounded-lg">
            <p className="font-medium text-gray-700">"Fast delivery and genuine Netflix account. Will buy again!"</p>
            <p className="text-sm text-gray-500">– Aakash S.</p>
          </div>
          <div className="bg-white shadow-sm p-4 border rounded-lg">
            <p className="font-medium text-gray-700">"Telegram Premium mila instantly. Thanks!"</p>
            <p className="text-sm text-gray-500">– Sneha R.</p>
          </div>
          <div className="bg-white shadow-sm p-4 border rounded-lg">
            <p className="font-medium text-gray-700">"Amazon Prime at such low price is unbeatable."</p>
            <p className="text-sm text-gray-500">– Rahul M.</p>
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href="https://t.me/shoperstopvouches"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            🔍 Check Real Proofs on Telegram
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
