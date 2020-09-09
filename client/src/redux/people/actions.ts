import {
  createAction as create,
  createAsyncAction as createAsync,
  ActionType,
} from 'typesafe-actions';
import PersonResult from '@shared/api/person/person.result';

export enum PersonActionType {
  INITIAL_FETCH = '@@cs/PEOPLE/INIT',
  DELETE_ALL = '@@cs/PEOPLE/DELETE_ALL',

  API_REQUEST = '@@cs/PEOPLE/REQUEST',
  API_SUCCESS = '@@cs/PEOPLE/SUCCESS',
  API_FAILURE = '@@cs/PEOPLE/FAILURE',
}

export const personApiActions = createAsync(
  PersonActionType.API_REQUEST,
  PersonActionType.API_SUCCESS,
  PersonActionType.API_FAILURE
)<undefined, PersonResult, Error>();

export const personActions = {
  [PersonActionType.INITIAL_FETCH]: create(PersonActionType.INITIAL_FETCH)<
    undefined
  >(),
  [PersonActionType.DELETE_ALL]: create(PersonActionType.DELETE_ALL)<
    undefined
  >(),

  ...(() => {
    const { request, success, failure } = personApiActions;

    return {
      [PersonActionType.API_REQUEST]: request,
      [PersonActionType.API_SUCCESS]: success,
      [PersonActionType.API_FAILURE]: failure,
    };
  })(),
};

export type PersonAction = ActionType<typeof personActions>;
