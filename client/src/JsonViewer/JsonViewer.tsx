import React from 'react';
import ReactJson from 'react-json-view';
import { makeStyles, createStyles, Paper } from '@material-ui/core';

interface Props {
  data: any;
}

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    viewer: {
      width: '40%',
      height: '80%',
      margin: spacing(8),
    },
  })
);

const JsonView: React.FC<Props> = ({ data }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.viewer}>
      <ReactJson
        src={data}
        name={false}
        theme="monokai"
        displayDataTypes={false}
      />
    </Paper>
  );
};

export default JsonView;
