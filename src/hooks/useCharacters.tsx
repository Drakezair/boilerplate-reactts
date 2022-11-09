import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { Character, CharacterFromApi, PlanetFromApi } from '@types';

interface IuseCharacter {
  characters: UseQueryResult<Character[], unknown>;
}

export default function useCharacter(): IuseCharacter {
  const getCharacters = async (): Promise<Character[]> => {
    const characters = await fetch('https://swapi.dev/api/people');
    const charactersJson: CharacterFromApi = await characters.json();
    const data = await Promise.all(
      charactersJson.results.flatMap(async (character) => {
        const planet = await fetch(character.homeworld);
        const planetJson: PlanetFromApi = await planet.json();
        return {
          name: character.name,
          gender: character.gender,
          birthYear: character.birth_year,
          planet: planetJson.name
        };
      })
    );
    return data;
  };

  const characters = useQuery<Character[]>(['characters'], getCharacters);

  return { characters };
}
