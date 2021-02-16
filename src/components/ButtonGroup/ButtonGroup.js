import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { BUTTON_LABEL } from '../../globals/constants';
import Loader from '../Loader';
import { useStyles } from './ButtonGroup.style';

function ButtonGroup({ handleReset, handleShow, isDisabled, loading }) {
  const classes = useStyles();

  return (
    <div className={classes.buttonGroupContainer}>
      <div className={classes.showButtonWrapper}>
        <Button
          color="primary"
          disabled={loading || isDisabled}
          onClick={handleShow}
          variant="contained"
        >
          {BUTTON_LABEL.show}
        </Button>
        {loading && <Loader />}
      </div>
      <div>
        <Button
          color="secondary"
          disabled={!isDisabled}
          onClick={handleReset}
          variant="outlined"
        >
          {BUTTON_LABEL.reset}
        </Button>
      </div>
    </div>
  );
}

ButtonGroup.propTypes = {
  handleReset: PropTypes.func.isRequired,
  handleShow: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ButtonGroup;
