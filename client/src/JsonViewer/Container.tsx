import { connect } from 'react-redux';
import { CsState } from '@client/redux/state';
import { getPeople } from '@client/redux/people/selectors';
import JsonViewer from '@client/JsonViewer/JsonViewer';

interface StateProps {
  data: any;
}

const getStateProps = (state: CsState): StateProps => ({
  data: getPeople(state),
});

const wrapped = connect<StateProps, {}, {}, CsState>(getStateProps, () => ({}))(
  JsonViewer
);

export default wrapped;
