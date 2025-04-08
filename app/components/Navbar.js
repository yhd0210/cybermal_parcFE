
import Link from 'next/link';
import { FaUser, FaShoppingCart, FaSearch} from 'react-icons/fa';


export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-3 shadow bg-white">
      <Link href="/home">
      <h1 className="sm:flex hidden text-2xl font-bold text-blue-700">QuickCart</h1>
      </Link>
      <div className="flex items-center gap-2 w-full max-w-md mx-4">
        <input
          type="text"
          placeholder="상품 검색"
          className="flex-1 border border-gray-300 text-gray-600 rounded px-3 py-2"
        />
        <FaSearch className="text-gray-500 -translate-x-10">
          
        </FaSearch>
      </div>
      <div className="flex items-center gap-4 text-xl text-gray-700">
        <Link href="/user">
        <FaUser />

        </Link>
        <Link href="/cart">
        <FaShoppingCart />

        </Link>
      </div>
    </nav>
  );
}
