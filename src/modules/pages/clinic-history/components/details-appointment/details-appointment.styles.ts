import {
  makeStyles,
  tokens,
  typographyStyles,
} from '@fluentui/react-components';

export const useStyles = makeStyles({
  container: {
    'border-color': tokens.colorBrandBackground,
    fontFamily: typographyStyles.body1.fontFamily,
  },
});
