import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { useStyles } from './Text.style';

function Text({ text }) {
  const classes = useStyles();

  return (
    <div className={classes.textContainer}>
      <Typography variant="h5">{text}</Typography>
    </div>
  );
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
