import React from 'react';
import {
  TextField,
  TextFieldProps,
  makeStyles,
  createStyles,
} from '@material-ui/core';

interface Props {
  fieldName: string;
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isValid?: (value: string) => boolean;
  textFieldProps?: TextFieldProps;
}

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    textInput: {
      margin: spacing(1),
    },
  })
);

type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

const createChangeHandler = (
  setValue: React.Dispatch<React.SetStateAction<string>>
): ChangeHandler => ({ target: { value } }) => {
  setValue(value);
};

const CreatePersonField: React.FC<Props> = ({
  fieldName,
  label,
  value,
  setValue,
  isValid = (value) => value !== '',
  textFieldProps = {},
}) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.textInput}
      id={`${fieldName}-input`}
      {...{
        label,
        value,
      }}
      error={!isValid(value)}
      onChange={createChangeHandler(setValue)}
      fullWidth
      {...textFieldProps}
    />
  );
};

export default CreatePersonField;
