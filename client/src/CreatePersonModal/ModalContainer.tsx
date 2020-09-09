import Person from '@shared/model/person';
import { Dispatch } from 'redux';
import PersonHandler from '@client/api/people/person.handler';
import { FilterState } from '@client/redux/filter/state';
import { CsState } from '@client/redux/state';
import { getFilterState } from '@client/redux/filter/selectors';
import { connect } from 'react-redux';
import CreatePersonModal from '@client/CreatePersonModal/CreatePersonModal';
import ColorHandler from '@client/api/colors/color.handler';

interface OwnProps {
  open: boolean;
  closeModal: () => void;
}

interface StateProps {
  filters: FilterState;
}

const getStateProps = (state: CsState): StateProps => ({
  filters: getFilterState(state),
});

interface DispatchProps {
  createPerson: (person: Person) => Promise<void>;
  refreshData: (filters: FilterState) => Promise<void>;
}

const getDispatchProps = (dispatch: Dispatch): DispatchProps => {
  const personHandler = PersonHandler.create(dispatch);
  const colorHandler = ColorHandler.create(dispatch);

  return {
    createPerson: async (person) => {
      await personHandler.upsert(person);
    },
    refreshData: async (filters) => {
      await personHandler.getForFilter(filters);
      await colorHandler.getAll();
    },
  };
};

const wrapped = connect<StateProps, DispatchProps, OwnProps, CsState>(
  getStateProps,
  getDispatchProps
)(CreatePersonModal);

export default wrapped;
