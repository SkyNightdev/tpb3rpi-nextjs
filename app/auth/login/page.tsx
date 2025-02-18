"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Connexion</h1>
      <button onClick={() => signIn()} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Se connecter
      </button>
    </div>
  );
}
