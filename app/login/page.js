'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && username === storedUser.username && password === storedUser.password) {
      localStorage.setItem('loggedIn', 'true');
      router.push('/home');
    } else {
      alert('아이디 또는 비밀번호가 틀렸습니다');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">QuickCart</h2>
      <div className="bg-white p-6 rounded-lg shadow w-80">
        <h2 className="text-lg font-bold mb-4 p-2 text-black">로그인</h2>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border rounded text-black"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-black"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 mb-3"
        >
          로그인
        </button>
        <button
          onClick={() => router.push('/signup')}
          className="w-full bg-gray-300 py-2 rounded-xl hover:bg-gray-500 text-black"
        >
          회원가입
        </button>
      </div>
    </div>
  );
}
