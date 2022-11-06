import { Favorite, FavoriteBorder, LocationOn } from '@mui/icons-material';
import { Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Character } from '@types';
import { FunctionComponent } from 'react';

interface CharacteCardProps extends Character {
  favorite: boolean;
}

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
    cursor: 'pointer'
  }
});

const CharacteCard: FunctionComponent<CharacteCardProps> = ({
  birthYear,
  gender,
  name,
  planet,
  favorite
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <p className={classes.title}>{name}</p>
        <p className={classes.subLine}>
          {gender} | {birthYear}
        </p>
        <Chip className={classes.chip} icon={<LocationOn />} label={planet} />
      </div>
      <div>
        <span className={classes.button}>
          {favorite ? <Favorite /> : <FavoriteBorder />}
        </span>
      </div>
    </div>
  );
};

export default CharacteCard;
