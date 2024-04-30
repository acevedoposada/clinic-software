import { makeStyles, tokens } from '@fluentui/react-components';
import tw from 'twin.macro';

export const useStyles = makeStyles({
  container: {
    'background-color': tokens.colorNeutralBackground3Hover,
    ...tw`w-full h-screen flex relative`,
    '@media screen and (max-width: 767px)': {
      'background-color': tokens.colorNeutralBackground1,
    },
  },
  content: {
    color: tokens.colorNeutralForeground1Static,
    ...tw`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20`,
    '@media screen and (max-width: 767px)': {
      ...tw`!shadow-none`,
    },
  },
  overlay: {
    ...tw`block bg-white absolute h-1/2 w-full top-0 left-0 z-10`,
    '@media screen and (min-width: 767px)': {
      ...tw`hidden`,
    },
  },
  'form-container': {
    ...tw`w-full xl:w-[25rem] flex-auto`,
  },
  'form-banner': {
    color: tokens.colorNeutralForeground1,
    ...tw`w-full xl:w-[50rem] h-full`,
  },
});
