import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { useStyles } from './Title.style';

function Title({ title }) {
  const classes = useStyles();

  return (
    <div className={classes.titleContainer}>
      <Typography variant="h4">{title}</Typography>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
