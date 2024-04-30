import {
  makeStyles,
  tokens,
  typographyStyles,
  shorthands,
} from '@fluentui/react-components';
import tw from 'twin.macro';

export const useStyles = makeStyles({
  'card-content': {
    fontFamily: typographyStyles.body1.fontFamily,
    '& a': {
      color: tokens.colorCompoundBrandForeground1Hover,
      ...tw`underline`,
    },
  },
  pay: {
    'background-color': tokens.colorBrandForegroundOnLightPressed,
    ...shorthands.padding('1rem'),
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
    ...tw`block w-full`,
  },
});
