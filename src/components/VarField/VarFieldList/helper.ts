import {
  VarFieldListPropGetItemDescription,
  VarFieldListPropGetItemGroupId,
  VarFieldListPropGetItemLabel,
  VarFieldListPropGetItemValue,
  VarFieldListProps,
  VarItem,
} from '../types';

export const defaultGetItemLabel: VarFieldListPropGetItemLabel<VarItem> = (
  item,
) => item.label;
export const defaultGetItemGroupId: VarFieldListPropGetItemGroupId<VarItem> = (
  item,
) => item.groupId;
export const defaultGetItemDescription: VarFieldListPropGetItemDescription<
  VarItem
> = (item) => item.description;
export const defaultGetItemValue: VarFieldListPropGetItemValue<VarItem> = (
  item,
) => item.value;

export function withDefaultGetters<ITEM = VarItem>(
  props: VarFieldListProps<ITEM>,
) {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemGroupId: props.getItemGroupId || defaultGetItemGroupId,
    getItemDescription: props.getItemDescription || defaultGetItemDescription,
    getItemValue: props.getItemValue || defaultGetItemValue,
  };
}
