'use client';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

export default function NavbarBeforeLogin() {
  return (
    <nav className="flex justify-between items-center px-4 py-3 shadow bg-white">
      <Link href="/">
        <h1 className="sm:flex hidden text-2xl font-bold text-blue-700">QuickCart</h1>
      </Link>

      <div className="flex items-center gap-2 w-full max-w-md mx-4">
        <input
          type="text"
          placeholder="상품 검색"
          className="flex-1 border border-gray-300 text-gray-600 rounded px-3 py-2"
        />
        <FaSearch className="text-gray-500 -translate-x-10" />
      </div>

      <div className="flex items-center gap-2">
        <Link href="/login">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
            로그인
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-900">
            회원가입
          </button>
        </Link>
      </div>
    </nav>
  );
}
