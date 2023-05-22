type RouterItem = {
  name: string;
  path: string;
};

export const routesNames = {
  THEME_CONSTRUCTOR: 'THEME_CONSTRUCTOR',
};

export const routes: RouterItem[] = [
  {
    name: routesNames.THEME_CONSTRUCTOR,
    path: '/theme-constructor',
  },
];

export const defaultRoute = routesNames.THEME_CONSTRUCTOR;
