'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // 로그인 정보 삭제
    localStorage.removeItem('loggedIn');
    // 홈으로 이동
    router.push('/home');
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-gray-600">로그아웃 중입니다...</p>
    </div>
  );
}