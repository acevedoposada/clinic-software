import {
  makeStyles,
  tokens,
  shorthands,
  typographyStyles,
} from '@fluentui/react-components';
import tw from 'twin.macro';

export const useStyles = makeStyles({
  container: {
    ...tw`w-[4rem]`,
    ...shorthands.transition('width', '.3s', 'ease-in'),
  },
  content: {
    'background-color': tokens.colorNeutralBackground1Pressed,
    ...tw`h-full`,
    ...shorthands.transition('width', '.3s', 'ease-in'),
  },
  expanded: {
    ...tw`w-72`,
  },
  header: {
    'border-color': tokens.colorNeutralBackground3Pressed,
    ...tw`w-full h-16 border-b flex justify-end`,
  },
  'links-container': {
    ...tw`flex flex-col items-start w-full`,
  },
  link: {
    ...tw`w-full h-12 flex items-center justify-start`,
    ...shorthands.transition('background-color', '.3s', '0', 'ease-in'),
    ...shorthands.overflow('hidden'),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
  },
  'active-link': {
    color: tokens.colorCompoundBrandForeground1Hover,
    'background-color': tokens.colorBrandForegroundOnLightPressed,
  },
  version: {
    color: tokens.colorNeutralForegroundDisabled,
    ...tw`p-1 text-center`,
    ...typographyStyles.caption1,
  },
});
