import Link from 'next/link';

const products = [
  { id: 1, name: 'Diamond Pendant Necklace', price: 3250, weight: 5, category: 'Necklace' },
  { id: 2, name: 'Ruby Engagement Ring', price: 3280, weight: 5, category: 'Ring' },
  { id: 3, name: 'Emerald Bracelet', price: 3290, weight: 5, category: 'Bracelet' },
  { id: 4, name: 'Sapphire Earrings', price: 3400, weight: 5, category: 'Earrings' },
  { id: 5, name: 'Pearl Choker Set', price: 3500, weight: 5, category: 'Choker Set' },
  { id: 6, name: 'Golden Locket', price: 3600, weight: 5, category: 'Locket' },
  { id: 7, name: 'Kundan Tiara', price: 3700, weight: 5, category: 'Tiara' },
  { id: 8, name: 'Antique Brooch', price: 3750, weight: 5, category: 'Brooch' }
];

export default function Collection() {
  return (
    <div className="min-h-screen bg-luxury text-white">
      <header className="bg-black border-b-2 border-gold sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/"><h1 className="text-4xl font-bold text-gold cursor-pointer">MUCOKIANDCO</h1></Link>
          <p className="text-sm text-gold tracking-widest">Collection</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-5xl font-bold text-gold mb-12 text-center tracking-wider">PREMIUM COLLECTION</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="bg-black border-2 border-gold hover:border-yellow-500 cursor-pointer transition transform hover:scale-105 overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-b from-gold to-yellow-600 flex items-center justify-center">
                  <p className="text-black text-6xl font-bold">💎</p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-gold text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-gold text-2xl font-bold">${product.price.toFixed(2)}</p>
                    <p className="text-gray-400 text-xs">{product.weight}g • 22K</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-black border-t-2 border-gold mt-12 py-8 text-center text-gray-400">
        <p>&copy; 2025 MUCOKIANDCO. All rights reserved.</p>
      </footer>
    </div>
  );
}
