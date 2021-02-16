import CircularProgress from '@material-ui/core/CircularProgress';

import { LOADER } from '../../globals/constants';
import { useStyles } from './Loader.style';

function Loader() {
  const classes = useStyles();

  return (
    <CircularProgress
      className={classes.buttonProgress}
      size={LOADER.button.size}
      thickness={LOADER.button.thickness}
    />
  );
}

export default Loader;
