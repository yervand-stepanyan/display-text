import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  buttonGroupContainer: {
    display: 'flex',
    marginBottom: theme.customSpacing.large,
  },
  showButtonWrapper: {
    marginRight: theme.customSpacing.large,
    position: 'relative',
  },
}));
