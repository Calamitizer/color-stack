import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CsState } from '@client/redux/state';
import { shouldInitialFetch } from '@client/redux/people/selectors';
import PersonHandler from '@client/api/people/person.handler';
import DataFetcher from '@client/DataFetcher/DataFetcher';
import { personActions, PersonActionType } from '@client/redux/people/actions';

interface StateProps {
  shouldFetch: boolean;
}

const getStateProps = (state: CsState): StateProps => ({
  shouldFetch: shouldInitialFetch(state),
});

interface DispatchProps {
  fetch: () => void;
}

const getDispatchProps = (dispatch: Dispatch): DispatchProps => {
  const handler = PersonHandler.create(dispatch);

  return {
    fetch: () => {
      handler.getForFilter({ color: null }).then(() => {
        dispatch(personActions[PersonActionType.INITIAL_FETCH]());
      });
    },
  };
};
const wrapped = connect<StateProps, DispatchProps, {}, CsState>(
  getStateProps,
  getDispatchProps
)(DataFetcher);

export default wrapped;
