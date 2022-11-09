import { CharacterCard } from '@components';
import { List } from '@mui/material';
import { FunctionComponent } from 'react';

import useCharacter from '../../../hooks/useCharacters';

const FavoritesList: FunctionComponent = () => {
  const { favorites, favoritesSearch } = useCharacter();

  if (favoritesSearch?.length > 0) {
    return (
      <List>
        {favoritesSearch?.map((item) => (
          <CharacterCard key={item.name} {...item} />
        ))}
      </List>
    );
  }

  return (
    <List>
      {favorites?.map((item) => (
        <CharacterCard key={item.name} {...item} />
      ))}
    </List>
  );
};

export default FavoritesList;
