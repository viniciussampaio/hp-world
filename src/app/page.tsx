"use client"

import CharactersPage from "./Characters/page";

export default function Home() {
  return (
    <div className="flex text-center justify-center flex-col bg-slate-600">
      <h1 className="text-cyan-200">Harry Potter World</h1>
      <p className="text-cyan-200">Welcome to the Harry Potter World!</p>
      <div>
        <CharactersPage />
      </div>
    </div>
  );
}

