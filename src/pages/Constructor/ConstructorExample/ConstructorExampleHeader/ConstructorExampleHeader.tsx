import './ConstructorExampleHeader.css';

import { IconCalendar } from '@consta/icons/IconCalendar';
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';
import { Button } from '@consta/uikit/Button';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { DatePicker } from '@consta/uikit/DatePicker';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Select } from '@consta/uikit/Select';
import { Switch } from '@consta/uikit/Switch';
import { Text } from '@consta/uikit/Text';
import { useFlag } from '@consta/uikit/useFlag';
import { User } from '@consta/uikit/User';
import React, { useState } from 'react';

import image from '##/images/User.png';
import { cn } from '##/utils/bem';

import { choices, crumbs, types } from './helper';

const cnConstructorExampleHeader = cn('ConstructorExampleHeader');
type Props = {
  className?: string;
};

export const ConstructorExampleHeader = (props: Props) => {
  const { className } = props;

  const [choice, setChoice] = useState(choices[0]);
  const [type, setType] = useState<string | null>(null);
  const [flag, setFlag] = useFlag();
  const [dates, setDates] = useState<
    [(Date | undefined)?, (Date | undefined)?] | null
  >(null);

  const clearValues = () => {
    setChoice(choices[0]);
    setType(null);
    setFlag.off();
    setDates(null);
  };

  return (
    <div className={cnConstructorExampleHeader(null, [className])}>
      <div
        className={cnConstructorExampleHeader('Wrapper', [
          cnMixSpace({ mB: 'l', pT: 'xl', pB: '3xl', pH: '3xl' }),
        ])}
      >
        <div className={cnConstructorExampleHeader('Header')}>
          <Breadcrumbs
            className={cnConstructorExampleHeader('Breadcrumbs')}
            items={crumbs}
            style={{ zIndex: 4 }}
            onlyIconRoot
            size="xs"
          />
          <User
            withArrow
            size="m"
            avatarUrl={image}
            view="clear"
            name="Олег"
            info="Пользователь Consta"
          />
        </div>
        <Text
          className={cnMixSpace({ mB: 's', mT: '2xl' })}
          size="2xl"
          weight="semibold"
          lineHeight="m"
        >
          Предпросмотр темы
        </Text>
        <Text
          className={cnConstructorExampleHeader('Description')}
          size="s"
          lineHeight="m"
          view="secondary"
        >
          В этом тестовом интерфейсе будут отражаться изменения настроек
          конструктора
        </Text>
      </div>
      <div
        className={cnConstructorExampleHeader('Content', [
          cnMixSpace({ pT: '2xl', pB: 'xs', pH: '3xl' }),
        ])}
      >
        <div
          className={cnConstructorExampleHeader('Statuses', [
            cnMixSpace({ mB: 'l' }),
          ])}
        >
          <ChoiceGroup
            items={choices}
            name="statuses"
            size="s"
            value={choice}
            onChange={setChoice}
            getItemLabel={(item) => item}
          />
          <Select
            placeholder="Имя команды"
            items={types}
            value={type}
            size="s"
            onChange={setType}
            getItemLabel={(item) => item}
            getItemKey={(item) => item}
          />
        </div>
        <Text
          size="s"
          lineHeight="m"
          view="secondary"
          className={cnMixSpace({ mB: 'xs' })}
        >
          Период
        </Text>
        <div className={cnConstructorExampleHeader('Controls')}>
          <div className={cnConstructorExampleHeader('Inputs')}>
            <DatePicker
              value={dates}
              size="xs"
              placeholder="ДД.ММ.ГГГГ"
              rightSide={[IconCalendar, IconCalendar]}
              type="date-time-range"
              className={cnConstructorExampleHeader('Date', [
                cnMixSpace({ mR: 'm' }),
              ])}
              onChange={setDates}
            />
            <Switch
              size="s"
              className={cnMixSpace({ mR: '2xs' })}
              checked={flag}
              onChange={setFlag.toggle}
            />
            <Text size="2xs" lineHeight="m" view="ghost">
              Учитывать выходные
            </Text>
          </div>
          <Button
            label="Сбросить фильтры"
            size="xs"
            view="ghost"
            form="round"
            onClick={clearValues}
          />
        </div>
      </div>
    </div>
  );
};
