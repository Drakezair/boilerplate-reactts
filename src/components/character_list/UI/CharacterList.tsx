import { CharacterCard } from '@components';
import { List } from '@mui/material';
import { FunctionComponent } from 'react';

import useCharacter from '../../../hooks/useCharacters';

const CharacterList: FunctionComponent = () => {
  const {
    characters: { data }
  } = useCharacter();

  return (
    <List>
      {data?.map((item) => (
        <CharacterCard key={item.name} {...item} />
      ))}
    </List>
  );
};

export default CharacterList;
