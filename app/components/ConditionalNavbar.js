'use client';
import { useEffect, useState } from 'react';
import NavbarBeforeLogin from './NavbarBeforeLogin';
import NavbarAfterLogin from './NavbarAfterLogin';

export default function ConditionalNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  return isLoggedIn ? <NavbarAfterLogin /> : <NavbarBeforeLogin />;
}
