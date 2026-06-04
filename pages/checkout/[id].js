import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Diamond Pendant Necklace', price: 3250, weight: 5 },
  { id: 2, name: 'Ruby Engagement Ring', price: 3280, weight: 5 },
  { id: 3, name: 'Emerald Bracelet', price: 3290, weight: 5 },
  { id: 4, name: 'Sapphire Earrings', price: 3400, weight: 5 },
  { id: 5, name: 'Pearl Choker Set', price: 3500, weight: 5 },
  { id: 6, name: 'Golden Locket', price: 3600, weight: 5 },
  { id: 7, name: 'Kundan Tiara', price: 3700, weight: 5 },
  { id: 8, name: 'Antique Brooch', price: 3750, weight: 5 }
];

export default function Checkout() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find(p => p.id === parseInt(id));
  const [showPayment, setShowPayment] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orderRef, setOrderRef] = useState('');
  const [copied, setCopied] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-luxury text-white flex items-center justify-center">
        <p className="text-gold text-2xl">Loading...</p>
      </div>
    );
  }

  const handleProceed = () => {
    if (!name.trim() || !email.trim()) {
      alert('Please fill in all details');
      return;
    }
    setShowPayment(true);
  };

  const handleConfirm = () => {
    const ref = `MACO-${Date.now()}`;
    setOrderRef(ref);
    setOrderPlaced(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('4890010100591001');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-luxury text-white">
        <header className="bg-black border-b-2 border-gold sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <Link href="/"><h1 className="text-4xl font-bold text-gold cursor-pointer">MUCOKIANDCO</h1></Link>
          </div>
        </header>

        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-black border-2 border-gold p-12 text-center">
            <p className="text-6xl mb-6">✓</p>
            <h2 className="text-4xl font-bold text-gold mb-4">ORDER CONFIRMED</h2>
            <p className="text-gray-300 mb-8">Thank you for your purchase of PURE 22K GOLD!</p>
            
            <div className="bg-luxury border border-gold p-8 mb-8 text-left">
              <h3 className="text-gold text-xl font-bold mb-4">Order Details</h3>
              <div className="space-y-3 text-gray-300">
                <p><span className="text-gold font-bold">Reference:</span> {orderRef}</p>
                <p><span className="text-gold font-bold">Product:</span> {product.name}</p>
                <p><span className="text-gold font-bold">Pure Gold Weight:</span> {product.weight}g of 22K gold</p>
                <p><span className="text-gold font-bold">Price:</span> ${product.price.toFixed(2)} USD</p>
                <p><span className="text-gold font-bold">Customer:</span> {name}</p>
                <p><span className="text-gold font-bold">Email:</span> {email}</p>
              </div>
            </div>

            <div className="bg-yellow-900 border border-gold p-6 mb-8 text-left">
              <h3 className="text-gold text-lg font-bold mb-4">Bank Transfer Required</h3>
              <p className="text-gray-300 mb-4">Please transfer to NCBA Bank:</p>
              <div className="bg-black p-4 border border-gold mb-4">
                <p className="text-gold font-bold text-lg">Bank: NCBA</p>
                <p className="text-gold font-bold text-lg">Amount: ${product.price.toFixed(2)} USD</p>
                <p className="text-gold font-bold text-lg">Reference: {orderRef}</p>
              </div>
              <p className="text-gray-300 text-sm">Keep your reference number safe for tracking.</p>
            </div>

            <Link href="/collection">
              <button className="w-full px-8 py-4 bg-gold text-black font-bold text-lg hover:bg-yellow-500 transition">
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>
        </section>

        <footer className="bg-black border-t-2 border-gold mt-12 py-8 text-center text-gray-400">
          <p>&copy; 2025 MUCOKIANDCO. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury text-white">
      <header className="bg-black border-b-2 border-gold sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/"><h1 className="text-4xl font-bold text-gold cursor-pointer">MUCOKIANDCO</h1></Link>
          <Link href={`/product/${product.id}`}><p className="text-sm text-gold cursor-pointer">← Back to Product</p></Link>
        </div>
      </header>

      <section className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-gold mb-8 text-center">SECURE CHECKOUT</h2>

        <div className="bg-black border-2 border-gold p-8 mb-8">
          <h3 className="text-gold text-2xl font-bold mb-6">Order Summary</h3>
          <div className="flex justify-between items-center border-b border-gold pb-4 mb-4">
            <div>
              <p className="text-gold text-lg font-bold">{product.name}</p>
              <p className="text-gray-400 text-sm">PURE 22K GOLD • {product.weight}g solid gold</p>
            </div>
            <p className="text-gold text-2xl font-bold">${product.price.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-300 mb-2">Total Amount:</p>
            <p className="text-gold text-4xl font-bold">${product.price.toFixed(2)} USD</p>
          </div>
        </div>

        {!showPayment && (
          <div className="bg-black border-2 border-gold p-8 mb-8">
            <h3 className="text-gold text-2xl font-bold mb-6">Your Details</h3>
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-gold text-sm font-bold mb-2">Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 bg-luxury border border-gold text-white" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-gold text-sm font-bold mb-2">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 bg-luxury border border-gold text-white" placeholder="Enter your email" />
              </div>
            </div>
            <button onClick={handleProceed} className="w-full px-8 py-4 bg-gold text-black font-bold text-lg hover:bg-yellow-500 transition">
              PROCEED TO PAYMENT
            </button>
          </div>
        )}

        {showPayment && !orderPlaced && (
          <div className="bg-black border-2 border-gold p-8">
            <h3 className="text-gold text-2xl font-bold mb-6">Payment Details</h3>
            <p className="text-gray-300 mb-6">Transfer the exact amount below to complete your PURE 22K GOLD purchase:</p>

            <div className="bg-luxury border-2 border-gold p-8 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="text-gold text-sm font-bold mb-2">BANK NAME</p>
                  <p className="text-white text-2xl font-bold">NCBA</p>
                </div>
                <div>
                  <p className="text-gold text-sm font-bold mb-2">ACCOUNT NUMBER</p>
                  <div className="flex items-center gap-4">
                    <p className="text-white text-2xl font-bold tracking-wider">4890010100591001</p>
                    <button onClick={handleCopy} className="px-4 py-2 bg-gold text-black font-bold hover:bg-yellow-500 transition text-sm">
                      {copied ? '✓ COPIED' : 'COPY'}
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-gold text-sm font-bold mb-2">AMOUNT (USD)</p>
                  <p className="text-white text-2xl font-bold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900 border border-gold p-4 mb-6 text-sm text-gray-200">
              <p className="mb-2"><strong>Important:</strong> Please use a reference number in your bank transfer for order tracking of your PURE 22K GOLD item.</p>
            </div>

            <button onClick={handleConfirm} className="w-full px-8 py-4 bg-gold text-black font-bold text-lg hover:bg-yellow-500 transition mb-4">
              I HAVE COMPLETED THE TRANSFER
            </button>

            <button onClick={() => setShowPayment(false)} className="w-full px-8 py-4 bg-black border border-gold text-gold font-bold text-lg hover:bg-gold hover:text-black transition">
              BACK TO DETAILS
            </button>
          </div>
        )}
      </section>

      <footer className="bg-black border-t-2 border-gold mt-12 py-8 text-center text-gray-400">
        <p>&copy; 2025 MUCOKIANDCO. All rights reserved.</p>
      </footer>
    </div>
  );
}
