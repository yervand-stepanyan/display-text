import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: 'border-box',
    minHeight: '100vh',
    padding: theme.customSpacing.base,
  },
}));
