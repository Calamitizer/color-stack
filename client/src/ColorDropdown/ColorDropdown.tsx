import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  SelectProps,
  MenuItem,
  makeStyles,
  createStyles,
} from '@material-ui/core';

const useStyles = makeStyles(({ shape }) =>
  createStyles({
    inputRoot: {
      color: 'white',
    },

    formControl: {
      borderRadius: shape.borderRadius,
      minWidth: 120,
    },
  })
);

type Color = string;
interface Props {
  options: Color[];
  value: Color | null;

  setValue: (value: string) => void;
}

const FIELD_ID = 'select-color';
const ColorDropdown: React.FC<Props> = ({ options, value, setValue }) => {
  const classes = useStyles();

  const createMenuItem = (color: Color, index: number) => (
    <MenuItem value={color} key={index}>
      {color}
    </MenuItem>
  );

  const onChange: SelectProps['onChange'] = ({ target: { value } }) => {
    setValue(value as string);
  };

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel
        id={`${FIELD_ID}-label`}
        color="secondary"
        className={classes.inputRoot}
      >
        Color
      </InputLabel>
      <Select
        labelId={`${FIELD_ID}-label`}
        id={FIELD_ID}
        value={value === null ? '' : value}
        label="Color"
        {...{ onChange }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map(createMenuItem)}
      </Select>
    </FormControl>
  );
};

export default ColorDropdown;
