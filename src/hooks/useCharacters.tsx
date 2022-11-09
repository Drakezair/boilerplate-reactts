import { store } from '@store';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { Character, CharacterFromApi, PlanetFromApi } from '@types';
import { useSnapshot } from 'valtio';

interface IuseCharacter {
  characters: UseQueryResult<Character[], unknown>;
  favorites: Character[];
  favoritesSearch: Character[] | [];
  search: (search: string) => void;
  addFavorite: (character: Character) => void;
  removeFavorite: (character: Character) => void;
  validateFav: (name: string) => boolean;
}

export default function useCharacter(): IuseCharacter {
  const { addFavorite, favorites, removeFavorite, search, favoritesSearch } =
    useSnapshot(store) as typeof store;

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

  const validateFav = (name: string): boolean => {
    const exist = favorites.find((item) => name === item.name);
    return exist !== undefined;
  };

  return {
    characters,
    addFavorite,
    removeFavorite,
    favorites,
    validateFav,
    search,
    favoritesSearch
  };
}
