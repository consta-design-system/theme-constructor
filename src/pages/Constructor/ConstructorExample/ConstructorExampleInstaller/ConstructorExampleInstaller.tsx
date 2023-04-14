/* eslint-disable jsx-a11y/img-redundant-alt */
import './ConstructorExampleInstaller.css';

import { IconPlay } from '@consta/icons/IconPlay';
import { AvatarGroup } from '@consta/uikit/AvatarGroup';
import { CheckboxGroup } from '@consta/uikit/CheckboxGroup';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Slider } from '@consta/uikit/Slider';
import { Text } from '@consta/uikit/Text';
import { User } from '@consta/uikit/User';
import { UserSelect } from '@consta/uikit/UserSelect';
import React, { useState } from 'react';

import image from '##/images/Example.png';
import userImage from '##/images/User.png';
import { cn } from '##/utils/bem';

import { users, UserType, variables } from './helper';

const cnConstructorExampleInstaller = cn('ConstructorExampleInstaller');

type Props = { className?: string };
export const ConstructorExampleInstaller = (props: Props) => {
  const { className } = props;

  const [user, setUser] = useState<UserType | null>(null);
  const [value, setValue] = useState(40);
  const [parametrs, setParametrs] = useState<string[] | null>([variables[0]]);

  return (
    <>
      <Text
        size="xl"
        lineHeight="m"
        weight="semibold"
        className={cnConstructorExampleInstaller('Title', [
          cnMixSpace({ mB: 's' }),
          className,
        ])}
      >
        Установщик
      </Text>
      <Text
        className={cnConstructorExampleInstaller('Description', [
          cnMixSpace({ mB: 'xl' }),
        ])}
        size="s"
        lineHeight="m"
        view="secondary"
      >
        Здесь вы можете поставить задачу на команду и выбрать руководителя
      </Text>
      <div className={cnConstructorExampleInstaller('Content')}>
        <div className={cnConstructorExampleInstaller('Controls')}>
          <UserSelect
            size="s"
            placeholder="Выберите пользователя"
            label="Руководитель"
            required
            caption="Руководитель будет декомпозировать и делегировать задачи на отдельных участников команд"
            value={user}
            className={cnMixSpace({ mB: 'l' })}
            onChange={({ value }) => setUser(value)}
            getItemLabel={(item) => item.name}
            getItemAvatarUrl={(item) => item.url}
            items={users}
          />
          <Text size="s" lineHeight="m" view="secondary">
            Срочность выполнения
          </Text>
          <Slider
            className={cnMixSpace({ mV: '2xs' })}
            value={value}
            onChange={({ value }) => setValue(value)}
          />
          <Text
            view="warning"
            size="xs"
            lineHeight="s"
            className={cnMixSpace({ mB: 'l' })}
          >
            Высокое значение влияет на срок исполнения
          </Text>
          <Text
            size="s"
            lineHeight="m"
            view="secondary"
            className={cnMixSpace({ mB: 'm' })}
          >
            Ответственные команды
          </Text>
          <CheckboxGroup
            items={variables}
            getItemLabel={(item) => item}
            value={parametrs}
            size="m"
            className={cnConstructorExampleInstaller('Checkboxes')}
            onChange={({ value }) => setParametrs(value)}
          />
        </div>
        <div className={cnConstructorExampleInstaller('Result')}>
          <Text
            size="s"
            lineHeight="m"
            view="secondary"
            className={cnMixSpace({ mB: 'xs' })}
          >
            Обучение
          </Text>
          <div
            className={cnConstructorExampleInstaller('ImageContainer', [
              cnMixSpace({ mB: 'xs' }),
            ])}
          >
            <IconPlay
              className={cnConstructorExampleInstaller('Play', [
                cnMixSpace({ mT: '2xs', pT: '3xs' }),
              ])}
              size="l"
              view="secondary"
            />
            <img
              src={image}
              className={cnConstructorExampleInstaller('Image')}
              alt="image"
            />
          </div>
          <div
            className={cnConstructorExampleInstaller('User', [
              cnMixSpace({ p: 's' }),
            ])}
          >
            <User
              avatarUrl={userImage}
              size="m"
              name="Олег"
              info="Пользователь Consta"
            />
            <div
              className={cnConstructorExampleInstaller('Divider', [
                cnMixSpace({ mV: 's' }),
              ])}
            />
            <Text
              size="2xs"
              lineHeight="m"
              view="secondary"
              className={cnConstructorExampleInstaller('Status', [
                cnMixSpace({ pL: 'm' }),
              ])}
            >
              Ожидает постановки задачи
            </Text>
          </div>
        </div>
      </div>
      <div
        className={cnConstructorExampleInstaller('Users', [
          cnMixSpace({ mT: '5xl' }),
        ])}
      >
        <Text
          size="s"
          lineHeight="m"
          view="secondary"
          className={cnMixSpace({ mB: 'l' })}
        >
          Участники команд
        </Text>
        <AvatarGroup items={users} size="l" visibleCount="auto" />
      </div>
    </>
  );
};
