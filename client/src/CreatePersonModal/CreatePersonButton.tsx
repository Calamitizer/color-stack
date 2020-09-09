import React from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CreatePersonModal from '@client/CreatePersonModal/ModalContainer';

const CreatePersonButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="create"
        onClick={openModal}
      >
        <AddIcon />
      </IconButton>
      <CreatePersonModal {...{ open, closeModal }} />
    </>
  );
};

export default CreatePersonButton;
