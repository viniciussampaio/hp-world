"use client";
import Card from "@/components/Card";
import getCharacters from "@/services/get/getCharacters";
import { useState, useEffect } from "react";
import { Character, CharacterResponse } from "@/@types/Character";

export default function CharactersPage() {
  const [characters, setCharacters] = useState<CharacterResponse[]>([]);

  const handleCharacters = async () => {
    try {
      const data = await getCharacters();
      console.log(data);
      if (data) {
        setCharacters(data);
      } else {
        console.error("Characters not found in response", data);
      }
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };
  useEffect(() => {
    handleCharacters();
  }, []);

  return (
    <>
      <h1>Characters</h1>
      <div className="grid-cols-4 grid justify-center items-center">
        {characters.length === 0 ? (
          <div>Loading...</div>
        ) : (
          characters.map((character: CharacterResponse) => {
            return <Card key={character.id} character={character} />;
          })
        )}
      </div>
    </>
  );
}

