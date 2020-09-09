import { connect } from 'react-redux';
import { groupPeopleByColor } from '@shared/util/group-people';
import { CsState } from '@client/redux/state';
import { getPeople } from '@client/redux/people/selectors';
import JsonViewer from '@client/JsonViewer/JsonViewer';
import { getFilterColor } from '@client/redux/filter/selectors';
import { getColors } from '@client/redux/colors/selectors';

interface StateProps {
  data: any;
}

const getStateProps = (state: CsState): StateProps => {
  const filterColor = getFilterColor(state);
  const people = getPeople(state);

  return {
    data:
      filterColor === null
        ? groupPeopleByColor(people, getColors(state))
        : people,
  };
};

const wrapped = connect<StateProps, {}, {}, CsState>(getStateProps, () => ({}))(
  JsonViewer
);

export default wrapped;
