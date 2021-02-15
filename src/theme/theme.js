import { createMuiTheme } from '@material-ui/core';

const MAIN_BORDER_RADIUS_VALUE = 4;
const MAIN_SPACING_VALUE = 8;
const TEXT_FIELD_WIDTH = 300;
const TEXT_FIELD_HEIGHT = 42;

const primaryColor = '#3F51B5';

export const theme = createMuiTheme({
  border: {
    borderRadius: `${MAIN_BORDER_RADIUS_VALUE}px`,
  },
  color: {
    primaryColor,
  },
  customSpacing: {
    small: `${MAIN_SPACING_VALUE / 2}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    large: `${MAIN_SPACING_VALUE * 2}px`,
  },
  size: {
    textFieldWidth: `${TEXT_FIELD_WIDTH}px`,
    textFieldHeight: `${TEXT_FIELD_HEIGHT}px`,
  },
});
