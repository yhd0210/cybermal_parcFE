'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn !== 'true') {
      router.push('/login');
    }
  }, []);

  return (
    <>
    <div className="p-10 text-xl font-bold">로그인</div>
    <button
  onClick={() => {
    localStorage.removeItem('loggedIn');
    router.push('/login');
  }}
  className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
>
  로그아웃
</button>
</>
  );
}