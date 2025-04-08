import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";


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

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-4">
        <section className="bg-gray-300 h-48 mb-4 rounded" />
        <h2 className="text-lg font-bold mb-2 text-gray-700">추천 상품</h2>

        <div className="flex overflow-x-auto gap-4">
          {Object.entries(products).map(([id, product]) => (
            <Link key={id} href={`/item/${id}`} className="min-w-[120px] bg-white shadow rounded p-2 hover:shadow-md transition">
                <div className="bg-gray-200 h-24 mb-2 rounded flex items-center justify-center">
                  <Image src="/tm.png" alt="상품 이미지" width={64} height={64} />
                </div>
                <p className="text-sm text-gray-700">{product.name}</p>
                <p className="text-xs text-gray-500">{product.price.toLocaleString()}원</p>
              
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}