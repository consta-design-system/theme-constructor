type RouterItem = {
  name: string;
  path: string;
};

export const routesNames = {
  THEME_CONSTRUCTOR: 'THEME_CONSTRUCTOR',
  HOME: 'HOME',
};

export const routes: RouterItem[] = [
  {
    name: routesNames.THEME_CONSTRUCTOR,
    path: '/theme-constructor',
  },
  {
    name: routesNames.HOME,
    path: '/',
  },
];

export const defaultRoute = routesNames.THEME_CONSTRUCTOR;
