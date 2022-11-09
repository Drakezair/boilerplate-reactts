import { CharacterCard } from '@components';
import { List } from '@mui/material';
import { Character } from '@types';
import { FunctionComponent } from 'react';

import useCharacter from '../../../hooks/useCharacters';

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: FunctionComponent<CharacterListProps> = () => {
  const {
    characters: { data }
  } = useCharacter();

  return (
    <List>
      {data?.map((item) => (
        <CharacterCard key={item.name} {...item} favorite={false} />
      ))}
    </List>
  );
};

export default CharacterList;
