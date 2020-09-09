import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  SelectProps,
  MenuItem,
} from '@material-ui/core';

type Color = string;
interface Props {
  options: Color[];
  value: Color | null;

  setValue: (value: string) => void;
}

const FIELD_ID = 'select-color';
const ColorDropdown: React.FC<Props> = ({ options, value, setValue }) => {
  const createMenuItem = (color: Color, index: number) => (
    <MenuItem value={color} key={index}>
      {color}
    </MenuItem>
  );

  const onChange: SelectProps['onChange'] = ({ target: { value } }) => {
    setValue(value as string);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel id={`${FIELD_ID}-label`}>Color</InputLabel>
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
