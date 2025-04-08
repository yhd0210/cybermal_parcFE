'use client';

import Navbar from "../components/Navbar";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function User() {
    const router = useRouter();

useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
        if (loggedIn !== 'true') {
            router.push('/login');
        }
}, []);

return(
    <>
        <Navbar />
        <div>유저</div>
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
    )
}
        