import './SnackBarContainer.css';

import { SnackBar } from '@consta/uikit/SnackBar';
import { Text } from '@consta/uikit/Text';
import { useAction, useAtom } from '@reatom/npm-react';
import React from 'react';

import { Message, messagesAtom } from '##/modules/messages';
import { cn } from '##/utils/bem';

const cnSnackBarContainer = cn('SnackBarContainer');

type Props = {
  children: React.ReactNode;
};
export const SnackBarContainer = (props: Props) => {
  const { children } = props;

  const [messages] = useAtom(messagesAtom);

  const setMessages = useAction((ctx, value: Message[]) =>
    messagesAtom(ctx, value),
  );

  const removeMessage = (message: Message) => {
    setMessages(messages.filter((el) => el.id !== message.id));
  };

  return (
    <>
      {children}
      <div className={cnSnackBarContainer()}>
        <SnackBar
          items={messages}
          getItemAutoClose={() => 10}
          getItemKey={(item) => item.id}
          getItemStatus={(item) => item.view}
          getItemShowProgress={() => 'timer'}
          getItemMessage={(item) => (
            <div className={cnSnackBarContainer('Message')}>
              <Text weight="semibold" size="m" lineHeight="s">
                {item.title}
              </Text>
              <Text size="m" lineHeight="s">
                {item.description}
              </Text>
            </div>
          )}
          onItemAutoClose={removeMessage}
        />
      </div>
    </>
  );
};
