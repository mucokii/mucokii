import { useRouter } from 'next/router';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Diamond Pendant Necklace', price: 3250, weight: 5, category: 'Necklace', description: 'Exquisite 22K gold necklace adorned with brilliant diamonds' },
  { id: 2, name: 'Ruby Engagement Ring', price: 3280, weight: 5, category: 'Ring', description: 'Stunning 22K gold ring featuring a premium ruby stone' },
  { id: 3, name: 'Emerald Bracelet', price: 3290, weight: 5, category: 'Bracelet', description: 'Elegant 22K gold bracelet with luxurious emerald stones' },
  { id: 4, name: 'Sapphire Earrings', price: 3400, weight: 5, category: 'Earrings', description: 'Radiant 22K gold earrings featuring deep blue sapphires' },
  { id: 5, name: 'Pearl Choker Set', price: 3500, weight: 5, category: 'Choker Set', description: 'Luxurious 22K gold choker with authentic pearls' },
  { id: 6, name: 'Golden Locket', price: 3600, weight: 5, category: 'Locket', description: 'Precious 22K gold locket perfect for keeping memories' },
  { id: 7, name: 'Kundan Tiara', price: 3700, weight: 5, category: 'Tiara', description: 'Spectacular 22K gold tiara adorned with kundan stones' },
  { id: 8, name: 'Antique Brooch', price: 3750, weight: 5, category: 'Brooch', description: 'Magnificent 22K gold brooch with antique finishing' }
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-luxury text-white flex items-center justify-center">
        <p className="text-gold text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury text-white">
      <header className="bg-black border-b-2 border-gold sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/"><h1 className="text-4xl font-bold text-gold cursor-pointer">MUCOKIANDCO</h1></Link>
          <Link href="/collection"><p className="text-sm text-gold cursor-pointer hover:text-yellow-500">← Back to Collection</p></Link>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-black border-2 border-gold p-8 flex items-center justify-center">
            <p className="text-gold text-9xl">💎</p>
          </div>

          <div>
            <h1 className="text-5xl font-bold text-gold mb-4">{product.name}</h1>
            <p className="text-2xl text-gold mb-2">${product.price.toFixed(2)} USD</p>
            <p className="text-gray-400 mb-6">Weight: {product.weight}g • 22K Gold</p>
            <p className="text-gray-300 mb-8 leading-relaxed">{product.description}</p>

            <div className="bg-black border border-gold p-6 mb-8">
              <h3 className="text-gold text-xl font-bold mb-4">Product Details</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ 100% Certified 22K Gold</li>
                <li>✓ Weight: {product.weight}g</li>
                <li>✓ Category: {product.category}</li>
                <li>✓ Premium Quality Craftsmanship</li>
                <li>✓ Secure Packaging & Insurance</li>
                <li>✓ Money Back Guarantee</li>
              </ul>
            </div>

            <Link href={`/checkout/${product.id}`}>
              <button className="w-full px-8 py-4 bg-gold text-black font-bold text-lg hover:bg-yellow-500 transition">
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t-2 border-gold mt-12 py-8 text-center text-gray-400">
        <p>&copy; 2025 MUCOKIANDCO. All rights reserved.</p>
      </footer>
    </div>
  );
}
