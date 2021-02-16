import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  textContainer: {
    border: `1px solid ${theme.color.primaryColor}`,
    borderRadius: theme.border.borderRadius,
    boxSizing: 'border-box',
    minHeight: theme.size.textFieldHeight,
    minWidth: theme.size.textFieldWidth,
    padding: `${theme.customSpacing.small} ${theme.customSpacing.base}`,
    textAlign: 'center',
  },
}));
