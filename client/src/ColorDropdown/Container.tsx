import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CsState } from '@client/redux/state';
import { getColors } from '@client/redux/colors/selectors';
import { getFilterColor } from '@client/redux/filter/selectors';
import { filterActions, FilterActionType } from '@client/redux/filter/actions';
import ColorDropdown from '@client/ColorDropdown/ColorDropdown';
import PersonHandler from '@client/api/people/person.handler';

type Color = string;
interface StateProps {
  options: Color[];
  value: Color | null;
}

const getStateProps = (state: CsState): StateProps => ({
  options: getColors(state),
  value: getFilterColor(state),
});

interface DispatchProps {
  setValue: (value: string) => void;
}

const getDispatchProps = (dispatch: Dispatch): DispatchProps => {
  const handler = PersonHandler.create(dispatch);

  return {
    setValue: (value) => {
      const color = value === '' ? null : value;

      dispatch(filterActions[FilterActionType.SET_COLOR](color));
      handler.getForFilter({ color });
    },
  };
};

const wrapped = connect<StateProps, DispatchProps, {}, CsState>(
  getStateProps,
  getDispatchProps
)(ColorDropdown);

export default wrapped;
