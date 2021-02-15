import { useState } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { BUTTON_LABEL, TITLE } from '../../globals/constants';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [showData, setShowData] = useState('');
  const data = '{ message: “Hello World” }';

  const handleShow = () => {
    setShowData(data);
  };

  const handleReset = () => {
    setShowData('');
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <Typography variant="h4">{TITLE}</Typography>
      </div>
      <div className={classes.buttonsContainer}>
        <div className={classes.showButtonWrapper}>
          <Button color="primary" onClick={handleShow} variant="contained">
            {BUTTON_LABEL.show}
          </Button>
        </div>
        <div>
          <Button color="secondary" onClick={handleReset} variant="outlined">
            {BUTTON_LABEL.reset}
          </Button>
        </div>
      </div>
      <div className={classes.dataContainer}>
        <Typography variant="h5">{showData}</Typography>
      </div>
    </div>
  );
}

export default Main;
