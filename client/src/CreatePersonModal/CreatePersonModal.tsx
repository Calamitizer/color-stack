import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  createStyles,
  Grid,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import CreatePersonField from '@client/CreatePersonModal/CreatePersonField';
import Person from '@shared/model/person';
import { FilterState } from '@client/redux/filter/state';

interface Props {
  open: boolean;
  closeModal: () => void;
  createPerson: (person: Person) => Promise<void>;

  filters: FilterState;
  refreshData: (filters: FilterState) => Promise<void>;
}

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },

    dialogText: {
      margin: spacing(0, 4),
    },

    formControl: {
      margin: spacing(1),
      // minWidth: 120,
    },
  })
);

const CreatePersonModal: React.FC<Props> = ({
  open,
  closeModal,
  createPerson,
  filters,
  refreshData,
}) => {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [color, setColor] = React.useState('');
  const [group, setGroup] = React.useState('');

  const clearForm = () => {
    setName('');
    setColor('');
    setGroup('');
  };

  const onClose = () => {
    clearForm();
    closeModal();
  };

  const onCreate = async () => {
    await createPerson({ name, color, group });
    refreshData(filters);
    onClose();
  };

  const disableCreate = [name, color, group].includes('');

  return (
    <Dialog {...{ open, onClose }} maxWidth="sm" fullWidth>
      <DialogTitle>Create/update person</DialogTitle>
      <DialogContentText className={classes.dialogText}>
        If a person with this name already exists, their group & color will be
        updated. Otherwise, a new entry will be created.
      </DialogContentText>
      <DialogContent>
        <form className={classes.container}>
          <Grid
            container
            direction="column"
            // spacing={4}
            justify="center"
            alignItems="center"
          >
            <CreatePersonField
              fieldName="name"
              label="Name"
              value={name}
              setValue={setName}
              textFieldProps={{
                autoFocus: true,
              }}
            />
            <CreatePersonField
              fieldName="Color"
              label="Color"
              value={color}
              setValue={setColor}
            />
            <CreatePersonField
              fieldName="group"
              label="Group"
              value={group}
              setValue={setGroup}
            />
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={onCreate}
          color="primary"
          disabled={disableCreate}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreatePersonModal;
