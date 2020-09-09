import { createAction as create, ActionType } from 'typesafe-actions';

export enum FilterActionType {
  SET_COLOR = '@@cs/FILTER/COLOR',
}

export const filterActions = {
  [FilterActionType.SET_COLOR]: create(FilterActionType.SET_COLOR)<
    string | null
  >(),
};

export type FilterAction = ActionType<typeof filterActions>;
