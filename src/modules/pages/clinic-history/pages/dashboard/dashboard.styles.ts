import { makeStyles, tokens } from '@fluentui/react-components';
import tw from 'twin.macro';

export const useStyles = makeStyles({
  'table-header': {
    boxShadow: '0 3px 5px rgba(0, 0, 0, .3)',
    '&:not(:stuck)': {
      boxShadow: '0 3px 5px rgba(0, 0, 0, .3)',
    },
  },
  info: {
    'border-color': tokens.colorBrandBackground,
    'background-color': tokens.colorBrandBackgroundPressed,
  },
  'info-content': {
    ...tw`flex my-auto`,
  },
});
