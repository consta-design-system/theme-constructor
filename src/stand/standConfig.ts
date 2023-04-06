import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';
import description from './description.mdx';

export const { createStand, createPage } = createConfig({
  title: 'Документация дизайн-системы',
  id: 'theme-constuctor',
  groups: [],
  group: 'Общая документация',
  image,
  description,
  repositoryUrl: 'https://github.com/consta-design-system/portal',
});
