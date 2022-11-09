import { Favorite, FavoriteBorder, LocationOn } from '@mui/icons-material';
import { Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Character } from '@types';
import { FunctionComponent } from 'react';

import useCharacter from '../../../hooks/useCharacters';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    borderBottom: '1px solid white',
    padding: 20,
    boxSizing: 'border-box'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  subLine: {
    fontWeight: 'lighter',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  chip: {
    background: 'rgba(255, 255, 255, 0.1) !important',
    color: 'white !important'
  },
  button: {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: 'white'
  }
});

const CharacteCard: FunctionComponent<Character> = ({
  birthYear,
  gender,
  name,
  planet
}) => {
  const classes = useStyles();
  const { validateFav, addFavorite, removeFavorite } = useCharacter();
  return (
    <div className={classes.container}>
      <div>
        <p id={name} className={classes.title}>
          {name}
        </p>
        <p className={classes.subLine}>
          {gender} | {birthYear}
        </p>
        <Chip className={classes.chip} icon={<LocationOn />} label={planet} />
      </div>
      <div>
        <button
          onClick={() =>
            !validateFav(name)
              ? addFavorite({ name, gender, birthYear, planet })
              : removeFavorite({ name, gender, birthYear, planet })
          }
          className={classes.button}
        >
          {validateFav(name) ? (
            <Favorite id="fav" />
          ) : (
            <FavoriteBorder id="unfav" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CharacteCard;
