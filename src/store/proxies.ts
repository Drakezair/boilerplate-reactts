import { Character } from '@types';
import { proxy } from 'valtio';

interface IStore {
  currentPage: string;
  favorites: Character[];
  changeCurrentPage: (title: string) => void;
}

const store = proxy<IStore>({
  currentPage: 'Characters',
  favorites: [],
  changeCurrentPage(title) {
    store.currentPage = title;
  }
});

export { store };
export type { IStore };
