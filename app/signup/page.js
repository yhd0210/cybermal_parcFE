'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
    if (password.length < 8) {
      alert('비밀번호는 8자 이상이어야 합니다');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('회원가입이 완료되었습니다. 로그인 해주세요.');
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">QuickCart</h2>
      <div className="bg-white p-6 rounded-lg shadow w-80">
        <h2 className="text-lg font-bold mb-4 p-2 text-black">회원가입</h2>
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
          className="w-full p-2 mb-3 border rounded text-black"
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-black"
        />
        <p className="text-gray-500 text-xs mb-4">※ 비밀번호는 8자 이상 입력하세요.</p>
        <button
          onClick={handleSignUp}
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 mb-3"
        >
          회원가입
        </button>
        <button
          onClick={() => router.push('/login')}
          className="w-full bg-gray-300 py-2 rounded-xl hover:bg-gray-500 text-black"
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
}
