
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {[1, 2].map((_, i) => (
            <div key={i} className="bg-white shadow rounded-lg p-4 flex gap-4 items-center">
              <Image
                width={200}
                height={200}
                src="/tm.png"
                alt="이미지"
                className="w-32 h-32 object-cover rounded"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-700">티모</h3>
                <p className="text-gray-700">내일까지 배송</p>
                <p className="text-xl font-bold text-gray-900">000000원</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 text-gray-900 rounded-lg p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between font-bold text-lg">
              <span>상품 금액</span>
              <span>0000원</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>할인 금액</span>
              <span>0000원</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>결제 금액</span>
              <span>0000원</span>
            </div>
          </div>
          <button className="mt-6 bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition">
            결제하기
          </button>
        </div>
      </main>
    </div>
  );
}
