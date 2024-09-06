import api from "../api";
import { CharacterResponse } from "../../@types/Character";

export default async function getCharacters(): Promise<CharacterResponse[]> {
  const response = await api.get("characters");
  // console.log("API response:", response.data);
  return response.data;
}

