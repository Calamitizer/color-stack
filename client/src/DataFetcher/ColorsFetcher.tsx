import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CsState } from '@client/redux/state';
import { hasColors } from '@client/redux/colors/selectors';
import ColorHandler from '@client/api/colors/color.handler';
import DataFetcher from '@client/DataFetcher/DataFetcher';

interface StateProps {
  shouldFetch: boolean;
}

const getStateProps = (state: CsState): StateProps => ({
  shouldFetch: !hasColors(state),
});

interface DispatchProps {
  fetch: () => void;
}

const getDispatchProps = (dispatch: Dispatch): DispatchProps => {
  const handler = ColorHandler.create(dispatch);

  return {
    fetch: () => {
      handler.getAll();
    },
  };
};

const wrapped = connect<StateProps, DispatchProps, {}, CsState>(
  getStateProps,
  getDispatchProps
)(DataFetcher);

export default wrapped;
