import { useEffect, useState } from 'react';

import API from '../../fetchAPI';
import ButtonGroup from '../../components/ButtonGroup';
import ROUTES from '../../routes';
import Text from '../../components/Text';
import Title from '../../components/Title';
import { TITLE } from '../../globals/constants';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageToShow, setMessageToShow] = useState('');

  useEffect(() => {
    setMessageToShow(data.message || '');
  }, [data]);

  const getData = async () => {
    try {
      setLoading(true);

      const response = await API.getMessage(ROUTES.hello);

      setData(response);
    } catch (e) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleShow = async () => {
    await getData();
  };

  const handleReset = () => {
    setData('');
  };

  return (
    <div className={classes.mainContainer}>
      <Title title={TITLE} />
      <ButtonGroup
        handleReset={handleReset}
        handleShow={handleShow}
        isDisabled={!!data}
        loading={loading}
      />
      <Text text={messageToShow} />
    </div>
  );
}

export default Main;
