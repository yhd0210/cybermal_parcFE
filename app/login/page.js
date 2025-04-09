'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signUp, setsignUp] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('loggedIn', 'true');
      router.push('/home');
    } else {
      alert('아이디 또는 비밀번호가 틀렸습니다');
    }
  };
{if(!signUp) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">QuickCart</h2>
      <div className="bg-white p-6 rounded-lg shadow w-80">
      <h2 className="text-lg font-bold mb-4 p-2 text-black">로그인</h2>
      <div>
        <h1 className='text-black text-xs'>아이디</h1>
      <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border rounded text-black"
        />
      </div>
      <div>
      <h1 className='text-black text-xs'>비밀번호</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-black"
        />
        </div>
        <div className='flex flex-col items-center space-y-5'>
        <button
          onClick={handleLogin}
          className="w-full  bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
        >
          로그인
        </button>
        <button
          onClick={() => setsignUp(true)}
          className="w-full bg-gray-300 py-2 rounded-xl hover:bg-gray-500 text-black"
        >
          회원가입
        </button>
        </div>
      
      </div>
    </div>
  );
}
return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
  <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">QuickCart</h2>
<div className="bg-white p-6 rounded-lg shadow w-80">
<h2 className="text-lg font-bold mb-4 p-2 text-black">회원가입</h2>
<div>
  <h1 className='text-black text-xs'>아이디</h1>
<input
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="w-full p-2 mb-3 border rounded text-[#000000]"
  />
</div>
<div>
<h1 className='text-black text-xs'>비밀번호</h1>
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full p-2 border rounded text-black"
  />
  <h1 className='text-gray-500 text-xs mb-2'>8자 미만</h1> {/* mb-12 → mb-2 */}
  <h1 className='text-black text-xs'>비밀번호 확인</h1>
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full p-2 mb-4 border rounded text-black"
  />
  </div>
  <div className='flex flex-col items-center space-y-5'>
  <button
    onClick={() => setsignUp(false)}
    className="w-full  bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
  >
    회원가입
  </button>
  </div>

</div>
</div>
)
}
  
}