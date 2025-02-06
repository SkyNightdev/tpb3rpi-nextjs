'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/auth/login">Login</Link>
    </nav>
  );
}
