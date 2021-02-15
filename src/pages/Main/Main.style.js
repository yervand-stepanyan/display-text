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
  titleContainer: {
    marginBottom: theme.customSpacing.large,
    textAlign: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    marginBottom: theme.customSpacing.large,
  },
  showButtonWrapper: {
    marginRight: theme.customSpacing.large,
  },
  dataContainer: {
    border: `1px solid ${theme.color.primaryColor}`,
    borderRadius: theme.border.borderRadius,
    boxSizing: 'border-box',
    minHeight: theme.size.textFieldHeight,
    minWidth: theme.size.textFieldWidth,
    padding: `${theme.customSpacing.small} ${theme.customSpacing.base}`,
    textAlign: 'center',
  },
}));
