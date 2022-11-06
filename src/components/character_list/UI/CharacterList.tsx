import { CharacterCard } from '@components';
import { List } from '@mui/material';
import { Character } from '@types';
import { FunctionComponent } from 'react';

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: FunctionComponent<CharacterListProps> = () => {
  return (
    <List>
      <CharacterCard
        name="fae"
        birthYear="awda"
        gender="awdadw"
        planet="awdawd"
        favorite={false}
      />
      <CharacterCard
        name="fae"
        birthYear="awda"
        gender="awdadw"
        planet="awdawd"
        favorite={true}
      />
    </List>
  );
};

export default CharacterList;
