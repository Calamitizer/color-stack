import {
  createAction as create,
  createAsyncAction as createAsync,
  ActionType,
} from 'typesafe-actions';
import ColorResult from '@shared/api/color/color.result';

export enum ColorActionType {
  DELETE_ALL = '@@cs/COLORS/DELETE_ALL',

  API_REQUEST = '@@cs/COLORS/REQUEST',
  API_SUCCESS = '@@cs/COLORS/SUCCESS',
  API_FAILURE = '@@cs/COLORS/FAILURE',
}

export const colorApiActions = createAsync(
  ColorActionType.API_REQUEST,
  ColorActionType.API_SUCCESS,
  ColorActionType.API_FAILURE
)<undefined, ColorResult, Error>();

export const colorActions = {
  [ColorActionType.DELETE_ALL]: create(ColorActionType.DELETE_ALL)<undefined>(),

  ...(() => {
    const { request, success, failure } = colorApiActions;

    return {
      [ColorActionType.API_REQUEST]: request,
      [ColorActionType.API_SUCCESS]: success,
      [ColorActionType.API_FAILURE]: failure,
    };
  })(),
};

export type ColorAction = ActionType<typeof colorActions>;
