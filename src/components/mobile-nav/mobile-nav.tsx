import { mergeClasses, tokens } from '@fluentui/react-components';
import { NavLink, useNavigate } from 'react-router-dom';
import _ from 'lodash';

import { navItems, NavItemType } from 'constants/nav-items';
import useStyles from './mobile-nav.styles';

const MobileNav = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const content = (isActive: boolean, item: NavItemType) => {
    const { title, ActiveIcon, Icon } = item;
    const CurrentIcon = isActive ? ActiveIcon : Icon;
    return (
      <>
        <CurrentIcon
          fontSize={26}
          color={isActive ? tokens.colorCompoundBrandForeground1 : undefined}
        />
        <p
          className={mergeClasses(
            'truncate',
            classes['button-label'],
            isActive && classes['active-button']
          )}
        >
          {title}
        </p>
      </>
    );
  };

  return (
    <div className={classes.container}>
      {_.map(navItems, (item, idx) => {
        if (item.disabled)
          return (
            <div
              key={idx}
              className={mergeClasses(classes.button, 'opacity-40')}
            >
              {content(false, item)}
            </div>
          );

        return (
          <NavLink
            key={idx}
            className={classes.button}
            to={item.route}
            onClick={() => navigate(`/${item.route}`)}
          >
            {({ isActive }) => content(isActive, item)}
          </NavLink>
        );
      })}
    </div>
  );
};

export default MobileNav;
