import { Character } from '@types';
import { proxy } from 'valtio';

interface IStore {
  currentPage: string;
  favorites: Character[] | [];
  favoritesSearch: Character[] | [];
  changeCurrentPage: (title: string) => void;
  addFavorite: (character: Character) => void;
  removeFavorite: (character: Character) => void;
  search: (search: string) => void;
}

const store = proxy<IStore>({
  currentPage: 'Characters',
  favorites: [],
  favoritesSearch: [],
  changeCurrentPage(title) {
    store.currentPage = title;
  },
  addFavorite(character) {
    store.favorites = [...store.favorites, character];
  },
  removeFavorite(character) {
    store.favorites = store.favorites.filter(
      (item) => item.name !== character.name
    );
  },
  search(search) {
    const list = [
      ...store.favorites.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
      )
    ];
    store.favoritesSearch = list;
  }
});

export { store };
export type { IStore };
