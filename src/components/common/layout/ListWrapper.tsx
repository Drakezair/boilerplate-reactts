import { Box, Container } from '@mui/material';
import { FunctionComponent, ReactElement } from 'react';

interface CharacterLayoutProps {
  children: ReactElement;
}

const CharacterLayout: FunctionComponent<CharacterLayoutProps> = ({
  children
}) => {
  return (
    <Container>
      <Box>{children}</Box>
    </Container>
  );
};

export default CharacterLayout;
