import React from 'react';

export type VarItem = {
  label: string;
  value?: string;
  description?: string;
  groupId?: string;
};

export type VarFieldListPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type VarFieldListPropGetItemValue<ITEM> = (
  item: ITEM,
) => string | undefined;
export type VarFieldListPropGetItemDescription<ITEM> = (
  item: ITEM,
) => string | undefined;
export type VarFieldListPropGetItemGroupId<ITEM> = (
  item: ITEM,
) => string | undefined;
export type VarFieldListPropGetItemRightSide<ITEM> = (
  item: ITEM,
) => React.ReactNode;

export type VarFieldProps = {
  title: string;
  titileView?: 'link' | 'primary';
  description?: string;
  controls?: React.ReactElement;
  listTitle?: string;
  listComponent?: React.ReactNode;
  onReset?: () => void;
};

export type VarFieldListProps<ITEM = VarItem> = {
  items: ITEM[];
  getItemRightSide?: VarFieldListPropGetItemRightSide<ITEM>;
  groups?: Array<{ id?: string; label: string }>;
  className?: string;
  getItemLabel?: VarFieldListPropGetItemLabel<ITEM>;
  getItemValue?: VarFieldListPropGetItemValue<ITEM>;
  getItemGroupId?: VarFieldListPropGetItemGroupId<ITEM>;
  getItemDescription?: VarFieldListPropGetItemDescription<ITEM>;
} & (ITEM extends { label: string }
  ? {}
  : {
      getItemLabel: VarFieldListPropGetItemLabel<ITEM>;
    });

export type VarFieldItemProps<ITEM = VarItem> = {
  item: ITEM;
  getItemLabel: VarFieldListPropGetItemLabel<ITEM>;
  getItemValue: VarFieldListPropGetItemValue<ITEM>;
  getItemDescription: VarFieldListPropGetItemDescription<ITEM>;
  getItemRightSide?: VarFieldListPropGetItemRightSide<ITEM>;
};
