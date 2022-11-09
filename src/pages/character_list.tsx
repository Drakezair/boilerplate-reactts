import { ListWrapper } from '@layout';
import { ReactElement } from 'react';

import CharacterList from '../components/character_list/UI/CharacterList';

export default function CharacterPage(): ReactElement {
  return (
    <ListWrapper>
      <CharacterList />
    </ListWrapper>
  );
}
