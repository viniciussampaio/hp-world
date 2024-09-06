import Image from "next/image";
import { Character } from "@/@types/Character";

export default function Card({ character }: { character: Character }) {
  return (
    <div className="bg-yellow-100 border-2 border-yellow-600 rounded-lg shadow-md w-64 p-4 m-4 flex flex-col items-center">
      <Image
        alt={character.id}
        src={character.image}
        width={100}
        height={100}
        className="rounded-full"
      />
      <h2 className="text-xl font-bold text-yellow-700 mt-2 truncate max-w-full">
        Nome: {character.name}
      </h2>
      <p className="text-yellow-700 truncate max-w-full">
        Casa: {character.house}
      </p>
      <p className="text-yellow-700 truncate max-w-full">
        Varinha: {character.wand.core}
      </p>
    </div>
  );
}

