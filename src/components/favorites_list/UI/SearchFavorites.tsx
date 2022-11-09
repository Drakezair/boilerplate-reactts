import { Box, FormLabel, OutlinedInput } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { store } from '@store';
import { FunctionComponent } from 'react';
import { useSnapshot } from 'valtio';

const useStyle = makeStyles({
  container: {
    padding: '10px 0'
  },
  label: {
    color: 'white !important'
  },
  input: {
    marginTop: 10,
    width: '100%',
    border: '1px solid white !important',
    color: 'white !important'
  }
});

const SeachInput: FunctionComponent = () => {
  const classes = useStyle();
  const { search } = useSnapshot(store);
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className={classes.container}
    >
      <FormLabel className={classes.label}>Search a favourite</FormLabel>
      <OutlinedInput
        onChange={(e) => search(e.target.value)}
        className={classes.input}
        id="searchInput"
      />
    </Box>
  );
};

export default SeachInput;
