import { Dispatch } from 'redux';
import Person from '@shared/model/person';
import endpoint from '@shared/api/person/person.endpoint';
import { QProps } from '@shared/api/person/person.qprops';
import PersonResult from '@shared/api/person/person.result';
import { ApiHooks } from '@client/api/types';
import ApiHandler from '@client/api/api-handler';
import { FilterState } from '@client/redux/filter/state';
import { personApiActions } from '@client/redux/people/actions';

class PersonHandler extends ApiHandler<PersonResult> {
  static create = (dispatch: Dispatch) => new PersonHandler(dispatch);

  private static createHooks = (
    dispatch: Dispatch
  ): ApiHooks<PersonResult> => ({
    onRequest: () => {
      dispatch(personApiActions.request());
    },
    onSuccess: (result) => {
      dispatch(personApiActions.success(result));
    },
    onFailure: (error) => {
      dispatch(personApiActions.failure(error));
    },
  });

  private constructor(dispatch: Dispatch) {
    super(PersonHandler.createHooks(dispatch));
  }

  getForFilter = async ({ color }: FilterState) =>
    this.getByQProps({
      ...(color === null ? {} : { color }),
    });

  private getByQProps = async (qProps: QProps) =>
    this.baseGet(endpoint.getByQueryString(qProps));

  upsert = async (props: Person) => this.basePost(endpoint.getAll(true), props);
}

export default PersonHandler;
