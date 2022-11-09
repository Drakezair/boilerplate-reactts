import { ListWrapper } from '@layout';
import { ReactElement } from 'react';

import FavoritesList from '../components/favorites_list/UI/FavoritesList';
import SeachInput from '../components/favorites_list/UI/SearchFavorites';

export default function FavoritesPage(): ReactElement {
  return (
    <ListWrapper>
      <>
        <SeachInput />
        <FavoritesList />
      </>
    </ListWrapper>
  );
}
