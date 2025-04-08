// app/item/[id]/page.js
import Navbar from "@/app/components/Navbar";

const products = {
  xlah: {
    name: '티모',
    description: '좆모',
    price: 9900,
  },
  dlffkdhdl: {
    name: '일라어이',
    description: '반군',
    price: 12000,
  },
  eldzl: {
    name: '징크스',
    description: '징키',
    price: 12000,
  },
};

export default function ItemDetail({ params }) {
  const item = products[params.id];
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <Navbar />
      <main className="p-6 flex gap-6">
        <div className="w-1/2 bg-gray-200 h-80 rounded" />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <p className="text-2xl font-bold mb-6">{item.price.toLocaleString()}원</p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            장바구니 담기
          </button>
        </div>
      </main>
    </div>
  );
}