import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-luxury text-white">
      <header className="bg-black border-b-2 border-gold sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gold">MUCOKIANDCO</h1>
          <p className="text-sm text-gold tracking-widest">Luxury 22K Gold Jewellery</p>
        </div>
      </header>

      <section className="bg-gradient-to-b from-luxury to-black py-20 px-4 text-center">
        <h2 className="text-6xl font-bold text-gold mb-4 tracking-wider">TIMELESS ELEGANCE</h2>
        <p className="text-2xl text-gray-300 mb-8">Exquisite 22K Gold Collection</p>
        <Link href="/collection">
          <button className="px-8 py-4 bg-gold text-black font-bold text-lg hover:bg-yellow-500 transition rounded">
            DISCOVER COLLECTION
          </button>
        </Link>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-4xl font-bold text-gold mb-8 text-center">Why Choose MUCOKIANDCO</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black border border-gold p-8 text-center">
            <p className="text-gold text-3xl mb-4">✨</p>
            <h4 className="text-gold text-xl font-bold mb-2">Premium Quality</h4>
            <p className="text-gray-300">100% Certified 22K Gold</p>
          </div>
          <div className="bg-black border border-gold p-8 text-center">
            <p className="text-gold text-3xl mb-4">🛡️</p>
            <h4 className="text-gold text-xl font-bold mb-2">Secure Payment</h4>
            <p className="text-gray-300">Safe & Verified Transactions</p>
          </div>
          <div className="bg-black border border-gold p-8 text-center">
            <p className="text-gold text-3xl mb-4">🚚</p>
            <h4 className="text-gold text-xl font-bold mb-2">Fast Delivery</h4>
            <p className="text-gray-300">Secure Packaging & Insurance</p>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t-2 border-gold mt-12 py-8 text-center text-gray-400">
        <p>&copy; 2025 MUCOKIANDCO. All rights reserved.</p>
      </footer>
    </div>
  );
}
