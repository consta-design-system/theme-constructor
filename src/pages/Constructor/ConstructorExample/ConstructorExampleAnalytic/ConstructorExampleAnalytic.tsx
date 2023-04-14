import './ConstructorExampleAnalytic.css';

import { IconAdd } from '@consta/icons/IconAdd';
import { IconSettings } from '@consta/icons/IconSettings';
import { Button } from '@consta/uikit/Button';
import { Card } from '@consta/uikit/Card';
import { Grid } from '@consta/uikit/Grid';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { TagBase } from '@consta/uikit/TagBase';
import { Text } from '@consta/uikit/Text';
import { Tooltip } from '@consta/uikit/Tooltip';
import React, { useRef } from 'react';

import { cn } from '##/utils/bem';

import { ConstructorExampleAnalyticCard } from './ConstructorExampleAnalyticCard';
import { cardsData, types } from './helper';

const cnConstructorExampleAnalytic = cn('ConstructorExampleAnalytic');

type Props = {
  className?: string;
};

export const ConstructorExampleAnalytic = (props: Props) => {
  const { className } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div className={cnConstructorExampleAnalytic('Title', [className])}>
        <Text size="xl" lineHeight="m" weight="semibold">
          Аналитика
        </Text>
        <Button
          size="s"
          view="ghost"
          onlyIcon
          iconLeft={IconSettings}
          ref={buttonRef}
        />
        <Tooltip anchorRef={buttonRef}>Настроить дешборд по аналитике</Tooltip>
      </div>
      <Text
        size="s"
        lineHeight="m"
        view="secondary"
        className={cnConstructorExampleAnalytic('Description', [
          cnMixSpace({ mT: 's', mB: 'xl' }),
        ])}
      >
        Здесь вы можете ознакомиться с аналитикой по работе команд.
      </Text>
      <div
        className={cnConstructorExampleAnalytic('Tags', [
          cnMixSpace({ mB: 'xl' }),
        ])}
      >
        {types.map((item) => (
          <TagBase
            {...item}
            key={cnConstructorExampleAnalytic('Tag', { key: item.label })}
            size="s"
          />
        ))}
      </div>
      <Grid cols={2} rowGap="l" colGap="m">
        {cardsData.map((item) => (
          <ConstructorExampleAnalyticCard
            key={cnConstructorExampleAnalytic('Card', { key: item.title })}
            {...item}
          />
        ))}
        <Card
          className={cnConstructorExampleAnalytic('Add')}
          verticalSpace="xl"
          shadow={false}
          horizontalSpace="l"
          border
        >
          <Text align="center" size="xs" lineHeight="m" view="ghost">
            Добавьте дополнительную карточку, чтобы видеть больше данных
          </Text>
          <Button
            view="secondary"
            label="Добавить"
            size="s"
            iconLeft={IconAdd}
          />
        </Card>
      </Grid>
    </>
  );
};
